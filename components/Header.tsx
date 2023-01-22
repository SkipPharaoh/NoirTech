import Image from "next/image";
import Link from "next/link";
import Logo from "../public/favicon.ico";

export default function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src={Logo}
            width={50}
            height={50}
            alt="Logo"
            className="rounded-full"
          />
        </Link>
        <h1 className="">BLK Hood Tech</h1>
      </div>
      <div>
        <Link
          href="/login"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7AB0A] flex items-center rounded-full text-center"
        >
          Sign up/ Sign in
        </Link>
      </div>
    </header>
  );
}
