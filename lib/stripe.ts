import Stripe from "stripe";
import { env } from "./env.server";

export const stripe = new Stripe(env.STRIPE_API_KEY, {
  apiVersion: "2023-10-16",
  typescript: true,
});
