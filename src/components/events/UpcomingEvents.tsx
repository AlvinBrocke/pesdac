import AnimateIn from "@/components/ui/AnimateIn";
import SectionHeader from "@/components/ui/SectionHeader";

type ChurchEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: "worship" | "fellowship" | "outreach" | "youth" | "prayer";
  description: string;
  featured?: boolean;
};

const CATEGORY_LABELS: Record<ChurchEvent["category"], string> = {
  worship: "Worship",
  fellowship: "Fellowship",
  outreach: "Outreach",
  youth: "Youth",
  prayer: "Prayer",
};

const EVENTS: ChurchEvent[] = [
  {
    id: "sabbath-june-14",
    title: "Sabbath Worship Service",
    date: "Saturday, 14 June 2026",
    time: "10:00 AM – 1:00 PM",
    location: "Main Sanctuary",
    category: "worship",
    description:
      "Join us for our weekly Sabbath service with Spirit-filled worship, Scripture reading, and a message from Pastor Samuel Nyarko.",
    featured: true,
  },
  {
    id: "youth-sabbath-june-21",
    title: "Youth Sabbath",
    date: "Saturday, 21 June 2026",
    time: "10:00 AM – 1:00 PM",
    location: "Main Sanctuary",
    category: "youth",
    description:
      "A special Sabbath led by the PESDAC Youth Ministry — dynamic worship, a youth-focused sermon, and vibrant music.",
  },
  {
    id: "community-outreach-june-28",
    title: "Community Outreach Day",
    date: "Saturday, 28 June 2026",
    time: "8:00 AM – 12:00 PM",
    location: "Osu, Accra",
    category: "outreach",
    description:
      "We take our faith into the community — health screening, food distribution, and neighbourhood prayer walks in and around Ringway Estates.",
  },
  {
    id: "prayer-revival-july-4",
    title: "Week of Prayer & Revival",
    date: "Friday – Saturday, 4–5 July 2026",
    time: "6:00 PM (Fri) / 9:00 AM (Sat)",
    location: "Main Sanctuary",
    category: "prayer",
    description:
      "An intensive two-day prayer revival. Friday evening service followed by a full-day Saturday programme of intercession, testimony, and worship.",
  },
  {
    id: "fellowship-lunch-july-12",
    title: "Members' Fellowship Lunch",
    date: "Saturday, 12 July 2026",
    time: "1:00 PM – 3:00 PM",
    location: "Fellowship Hall",
    category: "fellowship",
    description:
      "A post-service potluck lunch for members and visitors. Bring a dish to share and enjoy warm community fellowship.",
  },
  {
    id: "pathfinders-investiture-july-19",
    title: "Pathfinders Investiture Ceremony",
    date: "Saturday, 19 July 2026",
    time: "10:00 AM – 1:00 PM",
    location: "Main Sanctuary",
    category: "youth",
    description:
      "Celebrating our Pathfinder club members as they receive their honours and advance to the next class level. Families warmly invited.",
  },
  {
    id: "womens-day-aug-2",
    title: "Women's Ministry Day",
    date: "Saturday, 2 August 2026",
    time: "9:00 AM – 1:00 PM",
    location: "Main Sanctuary & Fellowship Hall",
    category: "fellowship",
    description:
      "An enriching programme organised by the PESDAC Women's Ministry — worship, a guest speaker, workshops, and a light lunch.",
  },
  {
    id: "harvest-festival-aug-30",
    title: "Harvest Festival & Ingathering",
    date: "Saturday, 30 August 2026",
    time: "10:00 AM – 2:00 PM",
    location: "Main Sanctuary",
    category: "outreach",
    description:
      "Our annual Harvest Festival — a celebration of God's provision with special music, a thanksgiving service, and community ingathering for outreach.",
  },
];

function buildCalendarUrl(event: ChurchEvent): string {
  const base = "https://calendar.google.com/calendar/render?action=TEMPLATE";
  const title = encodeURIComponent(event.title);
  const details = encodeURIComponent(
    `${event.description}\n\nLocation: ${event.location}`
  );
  const location = encodeURIComponent(`${event.location}, Osu, Accra, Ghana`);
  return `${base}&text=${title}&details=${details}&location=${location}`;
}

export default function UpcomingEvents() {
  const featured = EVENTS.find((e) => e.featured);
  const rest = EVENTS.filter((e) => !e.featured);

  return (
    <section className="events-section">
      <div className="events-inner">
        <AnimateIn>
          <SectionHeader label="What's On" title="Upcoming Events" />
        </AnimateIn>

        {featured && (
          <AnimateIn delay={100}>
            <article className="events-card events-card--featured">
              <span className={`events-badge events-badge--${featured.category}`}>
                {CATEGORY_LABELS[featured.category]}
              </span>
              <div className="events-card-body">
                <div className="events-card-date">{featured.date}</div>
                <h2 className="events-card-title">{featured.title}</h2>
                <p className="events-card-desc">{featured.description}</p>
                <div className="events-card-meta">
                  <span>
                    <i className="ti ti-clock" aria-hidden="true" />
                    {featured.time}
                  </span>
                  <span>
                    <i className="ti ti-map-pin" aria-hidden="true" />
                    {featured.location}
                  </span>
                </div>
              </div>
              <a
                href={buildCalendarUrl(featured)}
                target="_blank"
                rel="noopener noreferrer"
                className="events-cal-btn"
                aria-label={`Add "${featured.title}" to Google Calendar (opens in new tab)`}
              >
                <i className="ti ti-calendar-plus" aria-hidden="true" />
                Add to Calendar
              </a>
            </article>
          </AnimateIn>
        )}

        <div className="events-grid">
          {rest.map((event, i) => (
            <AnimateIn key={event.id} delay={i * 80 + 120}>
              <article className="events-card">
                <span className={`events-badge events-badge--${event.category}`}>
                  {CATEGORY_LABELS[event.category]}
                </span>
                <div className="events-card-body">
                  <div className="events-card-date">{event.date}</div>
                  <h3 className="events-card-title">{event.title}</h3>
                  <p className="events-card-desc">{event.description}</p>
                  <div className="events-card-meta">
                    <span>
                      <i className="ti ti-clock" aria-hidden="true" />
                      {event.time}
                    </span>
                    <span>
                      <i className="ti ti-map-pin" aria-hidden="true" />
                      {event.location}
                    </span>
                  </div>
                </div>
                <a
                  href={buildCalendarUrl(event)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="events-cal-btn"
                  aria-label={`Add "${event.title}" to Google Calendar (opens in new tab)`}
                >
                  <i className="ti ti-calendar-plus" aria-hidden="true" />
                  Add to Calendar
                </a>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
