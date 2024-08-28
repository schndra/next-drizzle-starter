import { serial, text, timestamp, pgTable } from "drizzle-orm/pg-core";

// export const users = pgTable("user", {
//   id: serial("id"),
//   name: text("name"),
//   createdAt: timestamp("created_at"),
//   updatedAt: timestamp("updated_at"),
// });

export const userTable = pgTable("user", {
  id: text("id").primaryKey(),
  username: text("username").notNull().unique(),
  password_hash: text("password_hash").notNull(),
});

export const sessionTable = pgTable("session", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => userTable.id),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});
