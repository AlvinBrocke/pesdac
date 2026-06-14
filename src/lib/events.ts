export type ChurchEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: "worship" | "fellowship" | "outreach" | "youth" | "prayer";
  description: string;
  /** ICS datetime string in YYYYMMDDTHHMMSSZ format (Ghana = UTC+0) */
  dtstart: string;
  dtend: string;
  featured?: boolean;
};

export const CATEGORY_LABELS: Record<ChurchEvent["category"], string> = {
  worship: "Worship",
  fellowship: "Fellowship",
  outreach: "Outreach",
  youth: "Youth",
  prayer: "Prayer",
};

export const EVENTS: ChurchEvent[] = [
  {
    id: "sabbath-june-14",
    title: "Sabbath Worship Service",
    date: "Saturday, 14 June 2026",
    time: "10:00 AM – 1:00 PM",
    location: "Main Sanctuary",
    category: "worship",
    description:
      "Join us for our weekly Sabbath service with Spirit-filled worship, Scripture reading, and a message from Pastor Samuel Nyarko.",
    dtstart: "20260614T100000Z",
    dtend: "20260614T130000Z",
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
    dtstart: "20260621T100000Z",
    dtend: "20260621T130000Z",
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
    dtstart: "20260628T080000Z",
    dtend: "20260628T120000Z",
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
    dtstart: "20260704T180000Z",
    dtend: "20260705T210000Z",
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
    dtstart: "20260712T130000Z",
    dtend: "20260712T150000Z",
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
    dtstart: "20260719T100000Z",
    dtend: "20260719T130000Z",
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
    dtstart: "20260802T090000Z",
    dtend: "20260802T130000Z",
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
    dtstart: "20260830T100000Z",
    dtend: "20260830T140000Z",
  },
];
