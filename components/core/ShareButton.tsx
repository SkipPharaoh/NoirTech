"use client";

import { ShareIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import Tooltip from "./ToolTip";

interface ShareButtonProps {
  title: boolean;
}

export default function ShareButton({ title }: ShareButtonProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }
  }, [show]);

  const handleOnShareClick = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setShow(true);
    navigator.clipboard.writeText(evt.currentTarget.baseURI).then();
  };

  return (
    <>
      {title && <p className="font-semibold text-gray-800">Share</p>}
      <Tooltip text="Successfully copied link" show={show}>
        <button
          onClick={handleOnShareClick}
          className="rounded-full inline-flex justify-center items-center hover:shadow-md text-gray-800 bg-gray-100 hover:bg-gray-200 ml-1 share-button cursor-pointer h-10 w-10 share-copy"
        >
          <ShareIcon className="h-5 w-5" />
        </button>
      </Tooltip>
    </>
  );
}
