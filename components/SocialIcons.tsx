import React from "react";
import Image from "next/image";

interface Props {
  Icons: Icons[];
}

interface Icons {
  name: string;
  link: string;
  icon: string;
}

export default function SocialIcons({ Icons }: Props) {
  return (
    <div className="text-teal-500 flex justify-center pb-8">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-1 cursor-pointer inline-flex items-center
        rounded-full bg-gray-400 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
          <Image
            src={icon.icon && icon.icon}
            width={20}
            height={20}
            alt={icon.name}
          />
        </span>
      ))}
    </div>
  );
}
