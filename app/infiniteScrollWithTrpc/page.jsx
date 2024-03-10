// "use client";
// import { trpc } from "@/utils/client";

// export default function page() {
//   // {limit:2,cursor:0}
//   const products = trpc.placeholder.infiniteProductList.useInfiniteQuery({
//     queryKey: ["productList"],
//     queryFn: ({ pageParam }) => fetchPage(pageParam),
//     initialPageParam: 1,
//     ...options,
//     getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) =>
//       lastPage.nextCursor,
//     getPreviousPageParam: (
//       firstPage,
//       allPages,
//       firstPageParam,
//       allPageParams
//     ) => firstPage.prevCursor,
//   });
//   return (
//     <div>
//       <pre>{JSON.stringify(products.data, null, 2)}</pre>
//     </div>
//   );
// }
