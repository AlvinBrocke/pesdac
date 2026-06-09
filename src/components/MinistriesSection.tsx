import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import MinistryCard from "@/components/ui/MinistryCard";
import AnimateIn from "@/components/ui/AnimateIn";
import { MINISTRIES } from "@/lib/ministries";

export default function MinistriesSection() {
  return (
    <section id="ministries" className="section ministries">
      <SectionHeader label="Get Involved" title="Ministries for every season of life" />
      <AnimateIn className="prog-grid" stagger>
        {MINISTRIES.map((ministry) => (
          <MinistryCard
            key={ministry.slug}
            icon={ministry.icon}
            title={ministry.title}
            description={ministry.description}
            href={`/ministries/${ministry.slug}`}
          />
        ))}
      </AnimateIn>
      <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
        <Link className="watch-all" href="/ministries" aria-label="View all ministries">
          All Ministries <i className="ti ti-arrow-right" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
