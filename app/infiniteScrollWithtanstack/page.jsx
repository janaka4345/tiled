"use client";
import posts from "@/data";
import { useInfiniteQuery } from "@tanstack/react-query";

//mock a data  fetch
async function fetchPosts(page) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  //console.log();
  return posts.slice((page - 1) * 2, page * 2);
}

export default function page() {
  // { data, fetchNextPage, isFetchingNextPage }
  const data = useInfiniteQuery({
    queryKey: ["query"],
    queryFn: ({ pageParam }) => {
      // console.log({ pageParam });
      const response = fetchPosts(pageParam);
      return response;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      // console.log({ lastPage, allPages, lastPageParam, allPageParams });
      if (lastPage.length === 0) {
        return null;
      }
      return lastPageParam + 1;
    },
    getPreviousPageParam: (
      firstPage,
      allPages,
      firstPageParam,
      allPageParams
    ) => firstPageParam - 1,
  });

  return (
    <div>
      <pre>{JSON.stringify(data.data, null, 2)}</pre>
      <button disabled={!data.hasNextPage} onClick={data.fetchNextPage}>
        click
      </button>
      {/* <pre>{JSON.stringify(data.fetchNextPage, null, 2)}</pre> */}
    </div>
  );
}
