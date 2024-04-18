import { News } from "@/api/news/types";
import Link from "next/link";
import React from "react";

type Props = {
  news: News[];
};

export const NewsList: React.FC<Props> = ({ news }) => (
  <div className="flex flex-col gap-2">
    {news.map((news) => (
      <Link
        href={`/news/${news.id}`}
        key={news.id}
        className="text-orange-500 underline"
      >
        {news.title}
      </Link>
    ))}
  </div>
);
