interface DividerProps {
  className?: string;
}

export default function Divider({ className }: DividerProps) {
  return <hr className={`border-[#F7AB0A] ${className}`} />;
}
