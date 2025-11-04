import { SITE_URL } from "@/lib/seo";

export default async function sitemap() {
    const routes = ["", "/produk", "/harga", "/testimoni", "/faq", "/kontak"].map(
        (p) => ({
            url: `${SITE_URL}${p}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: p === "" ? 1 : 0.8,
        })
    );
    return routes;
}
