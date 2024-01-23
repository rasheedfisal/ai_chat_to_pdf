"use client";
import { z } from "zod";

export const env = {
  NODE_ENV: z.string().optional().parse(process.env.NODE_ENV),
};
