import { caller, serverClient } from "@/utils/serverClient";

export default async function page() {
  const users = await caller.userList();
  return (
    <>
      <div>page</div>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </>
  );
}
