import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Prince Emmanuel SDA Church in Osu, Accra. Send a message, request prayer, plan a visit, or find us on social media.",
  openGraph: {
    title: "Contact – PESDAC | Prince Emmanuel SDA Church",
    description:
      "Reach out to Prince Emmanuel SDA Church. We're here to help with general inquiries, prayer requests, membership, and planning your first visit.",
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
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="contact-body">
        <div className="contact-body-inner">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
    </>
  );
}
