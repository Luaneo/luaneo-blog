import fs from "fs/promises";
import path from "path";

export async function getSlugs() {
  const filenames = await fs.readdir(
    path.join(process.cwd(), "src", "markdown")
  );
  const slugs = filenames
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => filename.slice(0, -4));
  return slugs;
}
