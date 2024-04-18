import { BASE_URL } from "@/constants/variables";
import { BasicResponse } from "../common/types";
import { News } from "./types";

export const fetchNews = async () => {
  const response = await fetch(`${BASE_URL}/news`);

  if (response.ok) {
    const data: BasicResponse<News[]> = await response.json();

    return data;
  }

  throw new Error("Failed to fetch data.");
};

export const fetchNewsById = async (newsId: string) => {
  const response = await fetch(`${BASE_URL}/news/${newsId}`);

  if (response.ok) {
    const data: BasicResponse<News> = await response.json();

    return data;
  }

  throw new Error("Failed to fetch data.");
};
