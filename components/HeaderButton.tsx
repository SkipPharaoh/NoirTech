type HeaderButtonType = "mobile" | "desktop";

interface HeaderButtonProps {
  headerItem: string;
  headerLink: string;
  type: HeaderButtonType;
}

export default function HeaderButton({
  headerItem,
  headerLink,
  type,
}: HeaderButtonProps) {
  const headerStyle = {
    desktop: "py-2 text-base text-gray-800",
    mobile: "p-4 text-4xl text-white",
  };

  const headerClass =
    type === "mobile" ? headerStyle.mobile : headerStyle.desktop;
  return (
    // <li>
    <a href={headerLink}>
      <button
        className={`${headerClass} px-4 items-center rounded-full font-medium leading-6  hover:bg-gray-200 hover:text-gray-700`}
      >
        {headerItem}
      </button>
    </a>
    // </li>
  );
}
