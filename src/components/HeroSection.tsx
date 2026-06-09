import Link from 'next/link';
import ServiceItem from '@/components/ui/ServiceItem';
import HeroPlayerWrapper from '@/components/HeroPlayerWrapper';
import ScrollParallax from '@/components/ui/ScrollParallax';

const YOUTUBE_CHANNEL =
  'https://www.youtube.com/channel/UCiY1R5aOKZDTd1Xnwt5eQng/videos';

const SERVICE_TIMES = [
  { label: 'Calvary Hour',   value: '8:00 AM',         sub: 'Every Saturday' },
  { label: 'Sabbath School', value: '9:00 – 10:00',    sub: 'All ages welcome' },
  { label: 'Main Service',   value: '10:00 – 1:00 PM', sub: 'Worship & Word' },
  { label: 'Location',       value: 'Ringway Estates',  sub: '23 Osu Avenue, Accra' },
] as const;

export default function HeroSection() {
  return (
    <section className="hero">
      <ScrollParallax mode="bg" speed={0.28}>
        <HeroPlayerWrapper />
      </ScrollParallax>
      <div className="hero-content">
        <div className="hero-tag">Osu · Accra · Ghana</div>
        <h1>
          A place where
          <br />
          <em>faith</em> finds its home
        </h1>
        <p>
          An English-speaking Seventh-day Adventist church in the heart of
          Ringway Estates, Osu. Every Sabbath, we gather to worship, grow, and
          belong.
        </p>
        <div className="hero-actions">
          <Link href="/about#visit" className="btn-primary">
            <i className="ti ti-map-pin" aria-hidden="true" /> Plan Your Visit
          </Link>
          <a
            href={YOUTUBE_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <i className="ti ti-player-play" aria-hidden="true" /> Watch Latest Sermon
          </a>
        </div>
        <div className="service-strip">
          {SERVICE_TIMES.map((item) => (
            <ServiceItem key={item.label} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
