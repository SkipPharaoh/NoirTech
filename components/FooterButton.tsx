interface FooterButtonProps {
  footerItem: string;
  footerLink: string;
}

export default function FooterButton({
  footerItem,
  footerLink,
}: FooterButtonProps) {
  return (
    <a href={footerLink} className="inline-block">
      <button className="inline-flex relative items-center rounded-full px-4 py-1 text-sm font-medium leading-6 text-gray-800 hover:bg-gray-200 hover:text-gray-700">
        {footerItem}
      </button>
    </a>
  );
}
