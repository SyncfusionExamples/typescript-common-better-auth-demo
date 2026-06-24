"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl">Welcome, {session?.user.name}!</h1>
      <p>Email: {session?.user.email}</p>
      <button
        onClick={async () => {
          await authClient.signOut({
            fetchOptions: {
              onSuccess: () => router.push("/signup"),
            },
          });
        }}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Sign Out
      </button>
    </div>
  );
}