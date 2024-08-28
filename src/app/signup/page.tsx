import { signup } from "./actions";
import Link from "next/link";
import { Form } from "@/lib/form";

export default async function Page() {
  // const { user } = await validateRequest();
  // if (user) {
  // 	return redirect("/");
  // }
  return (
    <>
      <h1>Create an account</h1>
      <Form action={signup}>
        <label htmlFor="username">Username</label>
        <input name="username" id="username" />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <br />
        <button>Continue</button>
      </Form>
      <Link href="/login">Sign in</Link>
    </>
  );
}
