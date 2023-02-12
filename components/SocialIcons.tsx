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
    <div className="mb-6 grid grid-cols-3 md:grid-cols-none md:flex lg:justify-end justify-items-center w-3/4">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="rounded-full inline-flex justify-center items-center hover:shadow-md text-gray-800 bg-gray-100 hover:bg-gray-200 mr-1  h-12 w-12 share-facebook cursor-pointer"
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
