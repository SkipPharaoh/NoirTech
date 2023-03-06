type EmptyStateType = "empty" | "error" | "loading";

interface EmptyStateProps {
  text: string;
  icon?: string;
  button: string;
  type: EmptyStateType;
}

export default function EmptyState({
  text,
  icon,
  button,
  type,
}: EmptyStateProps) {
  const hasIcon = icon ?? "/images/404_Not_Found.png";

  return (
    <div>
      <div>
        <img src={hasIcon} alt={`${type} State Icon`} />
        <p>{text}</p>
        <button>{button}</button>
      </div>
    </div>
  );
}
