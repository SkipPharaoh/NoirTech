import EmptyState from "../../../components/core/EmptyState";

export default function Page() {
  const text =
    "Sorry, the page you have requested does not exist or has been moved.";
  const button = "View all posts";
  return (
    <EmptyState
      text={text}
      button={button}
      link="/posts"
      type="empty"
      iconStyle={{ justifyContent: "center" }}
    />
  );
}
