import { prefetchNews } from "@/api/news/queries";
import { News } from "@/components/news/News";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

const NewsPage = async () => {
  const queryClient = new QueryClient();

  await prefetchNews(queryClient);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <News />
    </HydrationBoundary>
  );
};

export default NewsPage;
