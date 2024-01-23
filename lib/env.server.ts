import { z } from "zod";

export const env = z
  .object({
    NODE_ENV: z.string().optional(),
    DATABASE_URL: z.string().min(1),
    OPENAI_API_KEY: z.string().min(1),

    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
    CLERK_SECRET_KEY: z.string().min(1),
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string().min(1),
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: z.string().min(1),
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: z.string().min(1),
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: z.string().min(1),

    NEXT_BASE_URL: z.string().min(1),

    STRIPE_API_KEY: z.string().min(1),
    STRIPE_WEBHOOK_SIGNING_SECRET: z.string().min(1),
    STRIPE_COMMAND: z.string().min(1),

    PINECONE_ENVIRONMENT: z.string().min(1),
    PINECONE_API_KEY: z.string().min(1),
  })
  .parse(process.env);
