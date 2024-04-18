import React from "react";
import Link from "next/link";

export const Home: React.FC = () => {
  return (
    <main className="flex flex-1 items-center justify-center gap-2">
      <Link href="/news" className="text-orange-500 underline">
        News page
      </Link>
    </main>
  );
};
