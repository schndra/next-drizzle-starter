import { Button } from "@/components/ui/button";
import { database } from "@/db";
import Image from "next/image";

export default async function Home() {
  const users = await database.query.users.findMany();

  console.log(users);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello from main</h1>
      <Button >hello!</Button>
    </main>
  );
}
