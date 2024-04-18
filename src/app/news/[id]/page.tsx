import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { prefetchSingleNews } from "@/api/news/queries";
import { NewsDetails } from "@/components/news-details/NewsDetails";

type Params = {
  id: string;
};

export const NewsDetailsPage = async ({ params }: { params: Params }) => {
  const queryClient = new QueryClient();

  await prefetchSingleNews(queryClient, params.id);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NewsDetails newsId={params.id} />
    </HydrationBoundary>
  );
};

export default NewsDetailsPage;
