import Link from "next/link";

// TODO: Replace with real Paystack payment page URL once registered
const PAYSTACK_URL = "https://paystack.com/pay/pesdac";

export default function GivingCta() {
  return (
    <section className="give-cta">
      <div className="give-cta-inner">
        <p className="give-cta-label">Ready to give?</p>
        <h2 className="give-cta-title">
          Every gift makes a difference
        </h2>
        <p className="give-cta-sub">
          Support the ministry and community work of Prince Emmanuel SDA
          Church. Securely and conveniently, from wherever you are.
        </p>
        <div className="give-cta-actions">
          <a
            href={PAYSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            aria-label="Give via Paystack (opens in new tab)"
          >
            <i className="ti ti-heart" aria-hidden="true" />
            Give via Paystack
          </a>
          <Link href="/contact" className="btn-outline">
            <i className="ti ti-message" aria-hidden="true" />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
