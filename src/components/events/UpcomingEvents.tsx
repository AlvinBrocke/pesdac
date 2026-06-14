import AnimateIn from "@/components/ui/AnimateIn";
import SectionHeader from "@/components/ui/SectionHeader";
import { EVENTS, CATEGORY_LABELS, type ChurchEvent } from "@/lib/events";

function buildGoogleCalUrl(event: ChurchEvent): string {
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
              <div className="events-cal-btns">
                <a
                  href={buildGoogleCalUrl(featured)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="events-cal-btn"
                  aria-label={`Add "${featured.title}" to Google Calendar (opens in new tab)`}
                >
                  <i className="ti ti-brand-google" aria-hidden="true" />
                  Google Calendar
                </a>
                <a
                  href={`/api/ics/${featured.id}`}
                  download={`${featured.id}.ics`}
                  className="events-cal-btn"
                  aria-label={`Download "${featured.title}" as iCal file`}
                >
                  <i className="ti ti-calendar-down" aria-hidden="true" />
                  Apple / iCal
                </a>
              </div>
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
                <div className="events-cal-btns">
                  <a
                    href={buildGoogleCalUrl(event)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="events-cal-btn"
                    aria-label={`Add "${event.title}" to Google Calendar (opens in new tab)`}
                  >
                    <i className="ti ti-brand-google" aria-hidden="true" />
                    Google Calendar
                  </a>
                  <a
                    href={`/api/ics/${event.id}`}
                    download={`${event.id}.ics`}
                    className="events-cal-btn"
                    aria-label={`Download "${event.title}" as iCal file`}
                  >
                    <i className="ti ti-calendar-down" aria-hidden="true" />
                    Apple / iCal
                  </a>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
