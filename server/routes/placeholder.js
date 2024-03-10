// import axios from "axios";
// import { publicProcedure, router } from '../trpc';
// import { z } from "zod";
// const placeholder = router({
//     infiniteProductList: publicProcedure
//         .input(z.object({
//             limit: z.number().min(1).max(100).default(1),
//             cursor: z.number().nullish(),

//         }))
//         .query(async ({ input }) => {
//             const { limit, cursor } = input
//             // Retrieve users from a datasource, this is an imaginary database
//             const response = await axios.get('https://dummyjson.com/products'
//                 , {
//                     params: {
//                         limit,
//                         cursor
//                     }
//                 }
//             )
//             console.log(response.data);
//             const products = response?.data?.products
//             return products
//         }),
// });
// export { placeholder }