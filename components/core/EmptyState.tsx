import Image from "next/image";
import { CSSProperties } from "react";
import LinkTo from "./LinkTo";

type EmptyStateType = "empty" | "error" | "loading";

interface EmptyStateProps {
  text?: string;
  icon?: string;
  button?: string;
  link?: string;
  type: EmptyStateType;
  buttonStyle?: CSSProperties;
  textStyle?: CSSProperties;
  iconStyle?: CSSProperties;
}

export default function EmptyState({
  text,
  icon,
  button,
  link,
  type,
  buttonStyle,
  textStyle,
  iconStyle,
}: EmptyStateProps) {
  const hasIcon = icon ?? "/images/404_Not_Found.png";
  const isLoading = type === "loading";
  const route = link ?? "/";
  const loadingIcon = isLoading ? "/images/1stLogo.png" : hasIcon;

  return (
    <div
      className={"flex flex-col justify-center items-center"}
      style={{ minHeight: "75vh" }}
    >
      <div className="text-center align-middle">
        <div
          className={
            "flex justify-center" +
            `${
              isLoading && " animate-pulse animate-spin min-h-[140] min-w-[140]"
            }`
          }
          style={iconStyle}
        >
          <Image
            src={loadingIcon}
            alt={`${type} State Icon`}
            height={240}
            width={240}
          />
        </div>
        {!isLoading && (
          <>
            <p className="mt-8" style={textStyle}>
              {text}
            </p>
            <LinkTo href={route}>
              <button
                className={"border-2 solid rounded py-2 px-4 mt-8"}
                style={buttonStyle}
              >
                {button}
              </button>
            </LinkTo>
          </>
        )}
      </div>
    </div>
  );
}
