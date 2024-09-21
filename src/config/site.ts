import { makeUrlAbsolute } from "@/utils/url";

// User-facing domain, potential site title
const SITE_DOMAIN = process.env.NEXT_PUBLIC_SITE_DOMAIN;

// Used primarily for absolute references
export const BASE_URL = makeUrlAbsolute(
  process.env.NODE_ENV === "production" ? SITE_DOMAIN : "http://localhost:3000",
)?.toLocaleLowerCase();

// META / SOURCE / DOMAINS
export const SITE_TITLE = process.env.NEXT_PUBLIC_SITE_TITLE || "AIRI";
export const SITE_DESCRIPTION =
  process.env.NEXT_PUBLIC_SITE_DESCRIPTION || SITE_DOMAIN;
