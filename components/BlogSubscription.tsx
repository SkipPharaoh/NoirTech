import React from "react";

export default function BlogSubscription() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto md:px-20 py-16 text-center">
        <h1 className="font-bold text-3xl">Subscribe To Our Blog!</h1>

        <div className="py-4">
          <input
            type="text"
            className="shadow border rounded w-9/12 p-3 text-gray-700 focus:outline-none focus:shadow-outline text-center"
            placeholder="Enter Email Address*"
          />
        </div>

        <button className="bg-orange-400 px-20 py-3 rounded-full text-gray-50 text-xl">
          Subscribe
        </button>
        <div>
          <p className="my-2">
            I understand that the data I am submitting will be used to provide
            me with the above-described products and/or services and
            communications in connection therewith.
          </p>
          <p className="my-2">
            Read our{" "}
            <a
              className="text-gray-800 hover:underline font-medium underline"
              href="/privacy-policy"
            >
              privacy policy
            </a>{" "}
            for more information.
          </p>
        </div>
      </div>
    </section>
  );
}
