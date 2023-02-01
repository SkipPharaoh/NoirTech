import Image from "next/image";
import favicon from "../../public/favicon.ico";

export default function Logo(props: any) {
  const { renderDefault } = props;

  return (
    <div className="flex items-center space-x-2">
      <Image
        width={50}
        height={50}
        src={favicon}
        alt="Logo"
        className="rounded-full object-cover"
      />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
}
