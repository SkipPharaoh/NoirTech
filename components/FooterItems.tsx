import React from "react";

interface Props {
  Links: any;
  title: string;
}

interface Items {
  name: string;
  link: string;
}

export default function FooterItems({ Links, title }: Props) {
  return (
    <ul>
      <h1 className="mb-1 font-semibold">{title}</h1>
      {Links.map((link: Items) => (
        <li key={link.name}>
          <a
            className="text-black hover:text-teal-400 duration-300
          text-sm cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
