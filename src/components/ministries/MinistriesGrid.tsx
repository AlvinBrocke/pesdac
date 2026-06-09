import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";
import { MINISTRIES } from "@/lib/ministries";

export default function MinistriesGrid() {
  return (
    <section className="ministries-index-section">
      <div className="ministries-index-inner">
        <AnimateIn className="prog-grid" stagger>
          {MINISTRIES.map((ministry) => (
            <Link
              key={ministry.slug}
              href={`/ministries/${ministry.slug}`}
              className="prog-card prog-card--linked"
            >
              <div
                className="prog-card-img"
                aria-hidden="true"
                style={{
                  background: `linear-gradient(145deg, ${ministry.color} 0%, #1a0a00 100%)`,
                }}
              >
                <i className={`ti ${ministry.icon}`} />
              </div>
              <div className="prog-icon">
                <i className={`ti ${ministry.icon}`} aria-hidden="true" />
              </div>
              <h3>{ministry.title}</h3>
              <p>{ministry.description}</p>
              <div className="prog-card-meta">
                <span className="prog-card-leader">
                  <i className="ti ti-user" aria-hidden="true" />
                  {ministry.leader}
                </span>
                <span className="prog-card-arrow">
                  Learn More <i className="ti ti-arrow-right" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </AnimateIn>
      </div>
    </section>
  );
}
