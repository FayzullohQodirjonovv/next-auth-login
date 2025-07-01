"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const Dashboard = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return <p className="text-center mt-20">Loading...</p>;
  if (!session) return <p className="text-center mt-20 text-red-500">Not signed in</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6">
      <div className="bg-[#c8b1b1] shadow-lg rounded-xl p-8 max-w-md w-full text-center">
        {session.user?.image && (
          <div className="flex justify-center">
            <Image
              src={session.user.image}
              alt="User Avatar"
              width={100}
              height={100}
              className="rounded-full border-4 border-blue-500"
            />
          </div>
        )}
        <h1 className="text-2xl font-bold text-gray-900 mt-4">
        hush kelibsiz {session.user?.name}!
        </h1>
        <p className="text-gray-600 mt-2">{session.user?.email}</p>

        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow"
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
