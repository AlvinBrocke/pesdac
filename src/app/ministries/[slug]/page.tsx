import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MINISTRIES, getMinistryBySlug } from "@/lib/ministries";
import MinistryHero from "@/components/ministries/MinistryHero";
import MinistryDetail from "@/components/ministries/MinistryDetail";

export function generateStaticParams() {
  return MINISTRIES.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ministry = getMinistryBySlug(slug);
  if (!ministry) return {};

  return {
    title: ministry.title,
    description: `Learn about the ${ministry.title} at Prince Emmanuel SDA Church, Osu Accra. ${ministry.description}`,
    openGraph: {
      title: `${ministry.title} – PESDAC | Prince Emmanuel SDA Church`,
      description: ministry.description,
      images: [
        {
          url: "/church-visit.jpg",
          width: 1280,
          height: 720,
          alt: "Prince Emmanuel SDA Church congregation, Osu Accra",
        },
      ],
    },
    alternates: {
      canonical: `/ministries/${slug}`,
    },
  };
}

export default async function MinistryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ministry = getMinistryBySlug(slug);
  if (!ministry) notFound();

  return (
    <>
      <MinistryHero ministry={ministry} />
      <MinistryDetail ministry={ministry} />
    </>
  );
}
