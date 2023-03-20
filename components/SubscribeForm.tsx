"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { useMutation } from "@tanstack/react-query";
import { BaseSyntheticEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import LinkTo from "./core/LinkTo";

interface FormValues {
  email: string;
  singleErrorInput: string;
}

interface SuccessMessageProp {
  handleOnReset: () => void;
}

interface HandleOnSubmitProps {
  data: SubmitHandler<FormValues>;
  e: BaseSyntheticEvent;
}

export default function SubscribeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const subscribe: SubmitHandler<FormValues> = async ({ email }) => {
    const res = await fetch(`/api/subscribe?email=${email}`);
    if (!res.ok) {
      throw new Error("There was an error subscribing to the newsletter.");
    }
  };

  const { mutate, isLoading, isSuccess, isError, reset } = useMutation((data) =>
    subscribe(data)
  );

  const handleOnSubmit = ({ data, e }: HandleOnSubmitProps) => {
    e.preventDefault();
    mutate(data);
  };

  const SuccessMessage = ({ handleOnReset }: SuccessMessageProp) => {
    return (
      <p className="text-sm p-3 bg-green-100 border rounded-md border-green-700 text-green-700 italic text-center lg:col-span-5">
        <span className="">
          Success! Check your inbox and confirm your email.
        </span>
        <span className="self-center mr-1">
          <button
            onClick={() => handleOnReset()}
            className="bg-green-700 text-white rounded-full h-4 w-4 mt-auto ml-1 hover:bg-red-500 transition-colors duration-200"
          >
            <XMarkIcon className="h-3 w-3 mx-auto" />
          </button>
        </span>
      </p>
    );
  };
  const disabled = isLoading ? "opacity-50 cursor-not-allowed" : "";

  if (isSuccess) return <SuccessMessage handleOnReset={reset} />;

  return (
    <section className="lg:col-span-5">
      <div className="container mx-auto md:px-20 text-center">
        <h1 className="font-bold text-3xl">Subscribe To Our Blog!</h1>

        <div className="py-4">
          <form
            action=""
            className={isLoading ? "bg-gray-100 border-gray-100" : ""}
            onSubmit={handleSubmit(handleOnSubmit)}
          >
            <input
              aria-label="Email Address"
              placeholder="Enter Email Address*"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
              className={`shadow border rounded w-9/12 p-3 m-3 text-gray-700 focus:outline-none focus:shadow-outline text-center focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 ${disabled}`}
            />
            <p className="text-red-500 text-sm italic">
              {errors.email?.message}
            </p>
            <button
              className={`bg-orange-400 px-20 py-3 rounded-full text-gray-50 text-xl ${disabled}`}
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className=" text-sm leading-5 text-gray-600 text-center">
          <p className="my-2">
            I understand that the data I am submitting will be used to provide
            me with the above-described products and/or services and
            communications in connection therewith.
          </p>
          <p className="my-2">
            Read our{" "}
            <LinkTo
              className="text-gray-800 hover:underline font-medium underline"
              href="/privacy-policy"
            >
              privacy policy
            </LinkTo>{" "}
            for more information.
          </p>
        </div>
      </div>
    </section>
  );
}
