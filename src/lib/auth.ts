import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import { database } from "@/db";
import { sessionTable, userTable } from "@/db/schema";
import { Lucia } from "lucia";

const adapter = new DrizzlePostgreSQLAdapter(database, sessionTable, userTable);


export const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
  getUserAttributes: (attributes) => {
    return {
      // attributes has the type of DatabaseUserAttributes
      username: attributes.username,
    };
  },
});

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}

interface DatabaseUserAttributes {
  username: string;
}
