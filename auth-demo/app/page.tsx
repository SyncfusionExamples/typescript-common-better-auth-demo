import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Better Auth Demo</h1>
        <p className="text-gray-500 text-lg">
          Framework-agnostic, TypeScript-first authentication
        </p>
      </div>

      <div className="flex gap-4">
        <Link
          href="/signup"
          className="bg-black text-white px-6 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors"
        >
          Sign Up
        </Link>
      </div>
    </main>
  );
}