import Image from "next/image";
import Link from "next/link";

interface AuthorProps {
  image?: string;
  name?: string;
  profession?: string;
}

export default function Author({ image, name, profession }: AuthorProps) {
  const imageUrl = image ?? "/Images/author/author1.jpg";
  const isName = name ?? "Author Name";
  const isProfession = profession ?? "Job Title";

  return (
    <div className="author flex py-5">
      <Image
        src={imageUrl}
        alt=""
        width={60}
        height={60}
        className="rounded-full"
      />
      <div className="flex flex-col justify-center px-4">
        <Link
          href={"/"}
          className="text-md font-bold text-gray-800 hover:text-gray-600"
        >
          {isName}
        </Link>
        <span className="text-sm text-gray-500">{isProfession}</span>
      </div>
    </div>
  );
}
