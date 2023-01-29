import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#F7AB0A] flex items-center">
          <ArrowUturnLeftIcon className="h-5 w-5 text-[#F7AB0A] mr-2" />
          Back To Blog
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}
