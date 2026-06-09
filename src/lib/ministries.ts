export type Ministry = {
  slug: string;
  icon: string;
  title: string;
  description: string;
  longDescription: string;
  leader: string;
  leaderRole: string;
  meetingTime: string;
  meetingLocation: string;
  scriptureRef: string;
  scriptureText: string;
  activities: string[];
  color: string;
};

export const MINISTRIES: Ministry[] = [
  {
    slug: "youth-ministry",
    icon: "ti-users",
    title: "Youth Ministry",
    description:
      "A vibrant space for young people to grow in faith, build community, and discover their purpose.",
    longDescription:
      "The PESDAC Youth Ministry exists to nurture a generation of young Seventh-day Adventists who are rooted in Scripture, engaged in community, and confident in their identity in Christ. Our programmes blend worship, discipleship, and service to create spaces where young people can belong and thrive.\n\nWe believe that young people are not the future of the church — they are the church, right now. From Sabbath youth programmes to community outreach projects, our ministry empowers young adults and teenagers to lead, serve, and grow alongside one another.",
    leader: "Emerald Oti-Boadi",
    leaderRole: "Youth & Young Adult Director",
    meetingTime: "Every Saturday, 9:00 AM (Sabbath School) & 1:00 PM (Youth Hour)",
    meetingLocation: "Youth Hall & Main Sanctuary",
    scriptureRef: "1 Timothy 4:12",
    scriptureText:
      "Don't let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity.",
    activities: [
      "Weekly Youth Sabbath School class (ages 13–30)",
      "Youth-led Sabbath services (quarterly)",
      "Community service and outreach projects",
      "Annual youth camp and retreat",
      "Bible study and prayer groups",
      "Mentorship with church elders and pastoral team",
    ],
    color: "#6B2737",
  },
  {
    slug: "music-worship",
    icon: "ti-music",
    title: "Music & Worship",
    description:
      "Our choir and music teams lead the congregation in spirit-filled praise each Sabbath morning.",
    longDescription:
      "Music is the heartbeat of worship at PESDAC. Our Music & Worship Ministry brings together gifted vocalists, instrumentalists, and worship leaders who are committed to creating an atmosphere where every heart can encounter God. From the tender harmonies of our choir to the dynamic energy of our praise team, every element of musical worship is offered with excellence and reverence.\n\nWe draw on the rich heritage of Adventist hymnody alongside contemporary gospel music, weaving together tradition and renewal in a way that honours both our roots and the Spirit moving among us today.",
    leader: "Grace Darko",
    leaderRole: "Music & Worship Director",
    meetingTime: "Rehearsals every Friday, 6:00 PM",
    meetingLocation: "Main Sanctuary",
    scriptureRef: "Psalm 150:1–2",
    scriptureText:
      "Praise the Lord. Praise God in his sanctuary; praise him in his mighty heavens. Praise him for his acts of power; praise him for his surpassing greatness.",
    activities: [
      "Choir performances at every Sabbath service",
      "Praise & worship team leadership",
      "Special music for festive and evangelistic programmes",
      "Music workshops and voice training sessions",
      "Annual Music Festival",
      "Supporting visiting artists and special services",
    ],
    color: "#5A2430",
  },
  {
    slug: "womens-ministry",
    icon: "ti-heart",
    title: "Women's Ministry",
    description:
      "Empowering women through fellowship, prayer, outreach, and the sharing of lived wisdom.",
    longDescription:
      "The PESDAC Women's Ministry is a community of women committed to growing together in faith, encouraging one another through life's seasons, and serving the wider community with compassion. We provide a safe, nurturing space for women of all ages to share their experiences, deepen their walk with God, and discover their gifts for service.\n\nFrom prayer breakfasts and Bible study groups to community health initiatives and fundraising for local causes, the Women's Ministry is an active and joyful presence in the life of the church and the neighbourhood around us.",
    leader: "Margaret Boateng",
    leaderRole: "Women's Ministry Leader",
    meetingTime: "Second Saturday of the month, 2:00 PM",
    meetingLocation: "Fellowship Hall",
    scriptureRef: "Proverbs 31:25–26",
    scriptureText:
      "She is clothed with strength and dignity; she can laugh at the days to come. She speaks with wisdom, and faithful instruction is on her tongue.",
    activities: [
      "Monthly Women's Ministry meeting and prayer",
      "Annual Women's Day celebration",
      "Community health and wellness outreach",
      "Mentorship of young women in the church",
      "Fundraising for local and mission causes",
      "Bereavement and pastoral support network",
    ],
    color: "#7A3A4A",
  },
  {
    slug: "sabbath-school",
    icon: "ti-book",
    title: "Sabbath School",
    description:
      "Weekly Bible study classes for all ages — every Saturday from 9 to 10 AM before the main service.",
    longDescription:
      "Sabbath School is the cornerstone of Christian education at PESDAC. Held every Saturday from 9:00 to 10:00 AM, it provides structured, age-appropriate Bible study for every member of the congregation — from children in the cradle roll to adults in their golden years. It is a time for learning, discussion, and the deepening of biblical knowledge.\n\nThe adult division follows the official SDA Sabbath School quarterly lesson guide, which connects our congregation to a global study of the same Scripture. Children and youth divisions enjoy age-tailored materials that build a strong foundation of faith from the earliest years.",
    leader: "Kofi Asante",
    leaderRole: "Head Elder & Sabbath School Superintendent",
    meetingTime: "Every Saturday, 9:00 AM – 10:00 AM",
    meetingLocation: "Main Sanctuary (Adults) & Classrooms (Children & Youth)",
    scriptureRef: "2 Timothy 2:15",
    scriptureText:
      "Do your best to present yourself to God as one approved, a worker who does not need to be ashamed and who correctly handles the word of truth.",
    activities: [
      "Adult Bible study using the quarterly lesson guide",
      "Youth and junior Sabbath School divisions",
      "Children's cradle roll and kindergarten divisions",
      "Mission story and world church connection segment",
      "Sabbath School offerings for global mission",
      "Special programmes for teachers and division leaders",
    ],
    color: "#3D1A22",
  },
  {
    slug: "calvary-hour",
    icon: "ti-sunrise",
    title: "Calvary Hour",
    description:
      "A powerful prayer and devotional session held every Sabbath morning at 8:00 AM to start the day right.",
    longDescription:
      "Calvary Hour is how PESDAC begins every Sabbath — a sacred hour of prayer, praise, and preparation before the busyness of Sabbath School and the main service. Starting at 8:00 AM, it is an intimate and reverent gathering that sets the spiritual tone for the entire day of worship.\n\nDrawing its name from Calvary, the place where Jesus made the ultimate sacrifice, this programme invites the congregation to pause, give thanks, and open their hearts to God before the demands of the day. It is one of the quietest, most Spirit-filled hours in the PESDAC week.",
    leader: "Kofi Asante",
    leaderRole: "Head Elder",
    meetingTime: "Every Saturday, 8:00 AM – 9:00 AM",
    meetingLocation: "Main Sanctuary",
    scriptureRef: "Psalm 5:3",
    scriptureText:
      "In the morning, Lord, you hear my voice; in the morning I lay my requests before you and wait expectantly.",
    activities: [
      "Opening devotional and Scripture reading",
      "Congregational prayer and intercession",
      "Praise songs and hymns",
      "Brief inspirational message or testimony",
      "Special prayer for church needs and community concerns",
      "Transition into Sabbath School",
    ],
    color: "#4A1E28",
  },
  {
    slug: "pathfinders",
    icon: "ti-star",
    title: "Pathfinders",
    description:
      "Structured discipleship and life-skills programme for children and teens within the SDA tradition.",
    longDescription:
      "The PESDAC Pathfinder Club is an official Seventh-day Adventist youth organisation for children and teens between the ages of 10 and 15. Combining the best elements of scouting, discipleship, and community service, Pathfinders teaches young people practical skills, biblical values, and the joy of serving others.\n\nOur Pathfinders earn honours in a wide range of areas — from nature study and cooking to music and spiritual development — guided by trained adult counsellors who invest personally in each young person. The annual Pathfinder investiture ceremony is one of the highlights of the PESDAC church year.",
    leader: "Emerald Oti-Boadi",
    leaderRole: "Youth & Young Adult Director",
    meetingTime: "Every Saturday after the main service",
    meetingLocation: "Fellowship Hall & Outdoor Grounds",
    scriptureRef: "Proverbs 22:6",
    scriptureText:
      "Start children off on the way they should go, and even when they are old they will not turn from it.",
    activities: [
      "Weekly Pathfinder meetings with structured activities",
      "Earning honours in nature, arts, crafts, and faith",
      "Community service projects and outreach",
      "Annual Pathfinder investiture ceremony",
      "Camporees and inter-club activities",
      "First aid training and basic life skills",
    ],
    color: "#6B2737",
  },
];

export function getMinistryBySlug(slug: string): Ministry | undefined {
  return MINISTRIES.find((m) => m.slug === slug);
}
