"use client";

import { useSingleNews } from "@/api/news/queries";
import { formatDate } from "@/utils/date";
import React from "react";

type Props = {
  newsId: string;
};

export const NewsDetails: React.FC<Props> = ({ newsId }) => {
  const { data: news, isLoading } = useSingleNews(newsId);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!news) {
    return <div>News not found</div>;
  }

  return (
    <div className="flex flex-1 items-center justify-center">
      {news.data.title} at {formatDate(news.data.date)}
    </div>
  );
};
