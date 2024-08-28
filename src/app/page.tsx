import { Button } from "@/components/ui/button";
import { database } from "@/db";
import { validateRequest } from "@/lib/validate-request";
import Image from "next/image";
import Link from "next/link";
import { logout } from "./action";

export default async function Home() {
  const users = await database.query.userTable.findMany();

  const { user } = await validateRequest();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello from main</h1>
      <Button>hello!</Button>

      {user && (
        <form action={logout}>
          <Button variant="link">Logout</Button>
        </form>
      )}

      {user && (
        <Button asChild variant="link">
          <Link href="/login">Login</Link>
        </Button>
      )}
      {user && (
        <Button asChild variant="link">
          <Link href="/signup">Sign up</Link>
        </Button>
      )}
    </main>
  );
}
