import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-24">
      <h1 className="mb-[0.5em]">Welcome to Family Law!</h1>
      <Link
        href="/team"
        className="bg-orange-500 hover:bg-orange-600 text-white py-[0.5em] px-[1em]"
      >
        Get Started
      </Link>
    </main>
  );
}
