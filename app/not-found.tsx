import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="shell not-found">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>A little off the path.</h1>
      <Link href="/" className="button primary">
        Back to the portfolio →
      </Link>
    </main>
  );
}
