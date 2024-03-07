import { publicProcedure, router } from "./trpc";


const appRouter = router({
    userList: publicProcedure
        .query(async () => {
            // Retrieve users from a datasource, this is an imaginary database
            const users = [10, 20, 30]
            return users;
        }),
});

// Export type router type signature,
// NOT the router itself.
// export type AppRouter = typeof appRouter;
export { appRouter }