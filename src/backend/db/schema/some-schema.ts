import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const someTable = pgTable("some_items", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
});

export type InsertSomeItem = typeof someTable.$inferInsert;
export type SelectSomeItem = typeof someTable.$inferSelect;
