import EmptyState from "../../../components/core/EmptyState";

export default function PostNotFound() {
  const text = "No posts found!";
  const button = "View all posts";
  return <EmptyState text={text} button={button} link="/posts" type="empty" />;
}
