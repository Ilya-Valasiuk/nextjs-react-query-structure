"use client";

import React from "react";
import { useNews } from "@/api/news/queries";
import { NewsList } from "./components/news-list/NewsList";

export const News: React.FC = () => {
  const { data: news, isLoading } = useNews();

  if (isLoading) {
    return (
      <div className="flex flex-1 items-center justify-center gap-2">
        Loading ...
      </div>
    );
  }

  return (
    <main className="flex flex-1 items-center justify-center gap-2">
      <NewsList news={news?.data ?? []} />
    </main>
  );
};
