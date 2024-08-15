import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul className="news-list">
        <li>
          <Link href="/news/first-news">First News Item</Link>
        </li>
        <li>
          <Link href="/news/second-news">Second News Item</Link>
        </li>
        <li>
          <Link href="/news/third-news">First News Item</Link>
        </li>
      </ul>
    </>
  );
}
