"use client";
import { db } from "@/lib/db";
import { users } from "@/lib/schema";
export default function page() {
  async function handleClick() {
    const allUsers = await db.select().from(users);
    console.log(allUsers);
  }
  return (
    <div>
      <button onClick={handleClick}>click me</button>
    </div>
  );
}
