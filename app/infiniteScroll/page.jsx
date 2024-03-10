"use client";
import { products } from "@/serverActions/products";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function page() {
  const { ref, inView, entry } = useInView();

  const data = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: async ({ pageParam }) => {
      const productData = await products(pageParam);
      return productData;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      if (lastPage.length === 0) {
        return null;
      }
      return lastPageParam + 1;
    },
  });
  useEffect(() => {
    data.hasNextPage && inView ? data.fetchNextPage() : null;
    // console.log({ ref, inView, entry });
  }, [inView, data]);
  return (
    <div>
      <pre>{JSON.stringify(data?.data?.pages, null, 2)}</pre>
      <div ref={ref}>hi</div>
    </div>
  );
}
