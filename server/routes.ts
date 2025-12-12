import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { desc, eq } from "drizzle-orm";
import { contacts, type Contact } from "@shared/schema";
import { connectDb } from "./supabase";
import { sendSlackNotification } from "./slack";
import { requireAuth } from "./auth";

export async function registerRoutes(app: Express): Promise<Server> {
  const leadSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("A valid email is required"),
    company: z.string().min(2, "Company is required"),
    message: z.string().min(5, "Message is required"),
  });

  app.post("/api/transformation-leads", async (req, res, next) => {
    try {
      const db = await connectDb();
      const payload = leadSchema.parse(req.body);

      const [inserted] = await db
        .insert(contacts)
        .values({
          fullName: payload.name,
          email: payload.email,
          company: payload.company,
          message: payload.message,
          newsletter: false,
        })
        .returning();

      if (inserted) {
        await sendSlackNotification(inserted as Contact);
      }

      res.status(201).json({ message: "Lead captured" });
    } catch (err: any) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid input", issues: err.flatten() });
      }

      return next(err);
    }
  });

  const contactSchema = z.object({
    fullName: z.string().min(2, "Full name is required"),
    email: z.string().email("A valid email is required"),
    company: z.string().optional(),
    message: z.string().min(1, "Message is required"),
    newsletter: z.boolean().optional().default(false),
  });

  app.get("/api/contacts", requireAuth, async (_req, res, next) => {
    try {
      const db = await connectDb();
      const rows = await db
        .select()
        .from(contacts)
        .orderBy(desc(contacts.createdAt));

      res.json({ success: true, contacts: rows });
    } catch (err) {
      next(err);
    }
  });

  app.delete("/api/contacts/:id", requireAuth, async (req, res, next) => {
    try {
      const db = await connectDb();
      const { id } = req.params;
      await db.delete(contacts).where(eq(contacts.id, id));
      res.json({ success: true });
    } catch (err) {
      next(err);
    }
  });

  app.post("/api/contacts", async (req, res, next) => {
    try {
      const db = await connectDb();
      const payload = contactSchema.parse(req.body);
      const [inserted] = await db
        .insert(contacts)
        .values({
          fullName: payload.fullName,
          email: payload.email,
          company: payload.company,
          message: payload.message,
          newsletter: payload.newsletter ?? false,
        })
        .returning();

      if (inserted) {
        await sendSlackNotification(inserted as Contact);
      }

      res.status(201).json({ success: true, contact: inserted ?? null });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res
          .status(400)
          .json({ message: "Invalid input", issues: err.flatten() });
      }
      next(err);
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
