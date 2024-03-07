"use client";

import { trpc } from "@/utils/client";

export default function page() {
  const userList = trpc.userList.useQuery();
  return (
    <div>
      <h1>hj</h1>
      <pre>{JSON.stringify(userList, null, 2)}</pre>
    </div>
  );
}
