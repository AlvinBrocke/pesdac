"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

const FAQS = [
  {
    q: "What is tithe and how is it calculated?",
    a: "Tithe is 10% of your gross income. If you earn GH₵ 2,000 a month, your tithe is GH₵ 200. It is not based on what's left after expenses, but on your first-fruits — what you earn before deductions.",
  },
  {
    q: "Where does my tithe go?",
    a: "In the Seventh-day Adventist church, tithe does not stay at the local congregation. It flows to the Ghana Union Conference, which uses it to pay pastors, fund evangelism, and maintain denominational institutions across Ghana.",
  },
  {
    q: "Where do local offerings go?",
    a: "Local offerings (given during Sabbath services) stay at PESDAC. They cover operational costs — utilities, maintenance, local outreach, community programmes, and the pastoral support fund.",
  },
  {
    q: "Is giving online secure?",
    a: "Yes. We use Paystack, Ghana's leading payment platform, which is PCI-DSS compliant and supports major debit/credit cards and mobile money. Your payment details are never stored by the church.",
  },
  {
    q: "Can I give anonymously?",
    a: "You can give without creating an account on Paystack. However, if you require a donation receipt for tax or personal records, please contact us at info@pesdacgh.org and we can assist you.",
  },
  {
    q: "What is the Building Fund?",
    a: "The PESDAC Building Fund is a special offering designated for facility maintenance and future development of our church premises. You can select this category when giving via Paystack.",
  },
] as const;

export default function GivingFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="give-faq-section">
      <div className="give-faq-inner">
        <SectionHeader label="Common Questions" title="Giving — answered simply" />

        <div className="give-faq-list">
          {FAQS.map(({ q, a }, i) => (
            <div key={i} className={`give-faq-item${open === i ? " give-faq-item--open" : ""}`}>
              <button
                className="give-faq-question"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{q}</span>
                <i
                  className={`ti ${open === i ? "ti-chevron-up" : "ti-chevron-down"}`}
                  aria-hidden="true"
                />
              </button>
              {open === i && (
                <p className="give-faq-answer">{a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
