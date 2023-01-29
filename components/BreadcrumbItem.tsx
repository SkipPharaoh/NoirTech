import Link from "next/link";

interface Props {
  children: React.ReactNode;
  href: string;
  isCurrent: boolean;
}

const BreadcrumbItem = ({ children, href, isCurrent, ...props }: Props) => {
  return (
    <li {...props}>
      <Link
        className={isCurrent && "text-gray-500"}
        aria-current={isCurrent ? "page" : "false"}
        href={href}
        passHref
      >
        {children}
      </Link>
    </li>
  );
};

export default BreadcrumbItem;
