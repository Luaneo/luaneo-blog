import { getSlugs } from "@/markdown/utils";
import { MDXModule } from "mdx/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const mdxObject = (await import(`../../markdown/${slug}.mdx`)) as MDXModule;
  return mdxObject.metadata as Metadata;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const slugs = await getSlugs();
  if (!slugs.includes(slug)) {
    notFound();
  }
  const MDXObject = (await import(`../../markdown/${slug}.mdx`)) as MDXModule;
  const MDXContent = MDXObject.default;
  const MDXMetadata = MDXObject.metadata as Metadata;
  return (
    <div>
      <h1>Metadata</h1>
      <div>{JSON.stringify(MDXMetadata)}</div>
      <MDXContent />
    </div>
  );
}
