export const dynamic = "force-static";
export const revalidate = false;

import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    // host harus hostname saja (bukan full URL)
    host: new URL(SITE_URL).host,
  };
}
