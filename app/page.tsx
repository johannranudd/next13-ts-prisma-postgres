import Link from "next/link";

async function getPosts() {
  const res = await fetch("/api/routes");
  const data = await res.json();
  console.log(data);
}

export default function Home() {
  const test = getPosts();
  return (
    <main>
      <Link
        href={"/dashboard"}
        className="inline-block bg-teal-700 text-black font-medium py-2 px-10 rounded-md"
      >
        Go to dashboard
      </Link>
    </main>
  );
}
