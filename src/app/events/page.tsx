import type { Metadata } from "next";
import EventsHero from "@/components/events/EventsHero";
import UpcomingEvents from "@/components/events/UpcomingEvents";
import WeeklySchedule from "@/components/events/WeeklySchedule";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Stay up to date with upcoming events at Prince Emmanuel SDA Church — from weekly Sabbath worship and youth programmes to community outreach and special services.",
  openGraph: {
    title: "Events – PESDAC | Prince Emmanuel SDA Church",
    description:
      "Upcoming events at Prince Emmanuel SDA Church, Osu Accra. Worship services, fellowship, outreach, and special programmes for the whole family.",
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
    canonical: "/events",
  },
};

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <UpcomingEvents />
      <WeeklySchedule />
    </>
  );
}
