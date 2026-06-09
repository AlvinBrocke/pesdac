import AnimateIn from "@/components/ui/AnimateIn";
import SectionHeader from "@/components/ui/SectionHeader";

// TODO: Replace this placeholder URL with the church's real Paystack payment page URL
// e.g. https://paystack.com/pay/pesdac-tithe  or  https://paystack.com/pay/pesdac-offering
const PAYSTACK_URL = "https://paystack.com/pay/pesdac";

const TIERS = [
  {
    icon: "ti-percentage",
    name: "Tithe",
    basis: "Malachi 3:10",
    desc: "Tithe is 10% of your income returned to God. In the SDA church, tithe is forwarded to the Ghana Union Conference to support ministers and evangelism.",
    featured: false,
  },
  {
    icon: "ti-gift",
    name: "Local Offering",
    basis: "2 Corinthians 9:6–7",
    desc: "Freewill offerings given during Sabbath services support PESDAC directly — covering operational costs, community programmes, and local outreach.",
    featured: true,
  },
  {
    icon: "ti-building",
    name: "Special Offering",
    basis: "Exodus 35:5",
    desc: "Special offerings fund targeted projects: building maintenance, the school fund, Ingathering, and global Adventist missions like ADRA.",
    featured: false,
  },
] as const;

export default function GivingTiers() {
  return (
    <section className="give-tiers-section">
      <div className="give-tiers-inner">
        <AnimateIn>
          <SectionHeader label="Ways to Give" title="Choose how to support the mission" />
        </AnimateIn>

        <div className="give-tiers-grid">
          {TIERS.map(({ icon, name, basis, desc, featured }, i) => (
            <AnimateIn key={name} delay={i * 100}>
              <div className={`give-tier-card${featured ? " give-tier-card--featured" : ""}`}>
                <div className="give-tier-icon" aria-hidden="true">
                  <i className={`ti ${icon}`} />
                </div>
                <h3 className="give-tier-name">{name}</h3>
                <p className="give-tier-basis">{basis}</p>
                <p className="give-tier-desc">{desc}</p>
                <a
                  href={PAYSTACK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={featured ? "btn-gold give-tier-btn" : "btn-outline-light give-tier-btn"}
                  aria-label={`Give ${name} via Paystack (opens in new tab)`}
                >
                  Give Now
                  <i className="ti ti-arrow-up-right" aria-hidden="true" />
                </a>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
