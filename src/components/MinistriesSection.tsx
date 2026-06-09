import SectionHeader from "@/components/ui/SectionHeader";
import MinistryCard from "@/components/ui/MinistryCard";
import AnimateIn from "@/components/ui/AnimateIn";

const MINISTRIES = [
  {
    icon: "ti-users",
    title: "Youth Ministry",
    description:
      "A vibrant space for young people to grow in faith, build community, and discover their purpose.",
  },
  {
    icon: "ti-music",
    title: "Music & Worship",
    description:
      "Our choir and music teams lead the congregation in spirit-filled praise each Sabbath morning.",
  },
  {
    icon: "ti-heart",
    title: "Women's Ministry",
    description:
      "Empowering women through fellowship, prayer, outreach, and the sharing of lived wisdom.",
  },
  {
    icon: "ti-book",
    title: "Sabbath School",
    description:
      "Weekly Bible study classes for all ages — every Saturday from 9 to 10 AM before the main service.",
  },
  {
    icon: "ti-sunrise",
    title: "Calvary Hour",
    description:
      "A powerful prayer and devotional session held every Sabbath morning at 8:00 AM to start the day right.",
  },
  {
    icon: "ti-star",
    title: "Pathfinders",
    description:
      "Structured discipleship and life-skills programme for children and teens within the SDA tradition.",
  },
] as const;

export default function MinistriesSection() {
  return (
    <section id="ministries" className="section ministries">
      <SectionHeader label="Get Involved" title="Ministries for every season of life" />
      <AnimateIn className="prog-grid" stagger>
        {MINISTRIES.map((ministry) => (
          <MinistryCard key={ministry.title} {...ministry} />
        ))}
      </AnimateIn>
    </section>
  );
}
