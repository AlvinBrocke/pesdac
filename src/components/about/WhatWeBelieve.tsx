const BELIEFS = [
  {
    num: "01",
    icon: "ti-book",
    title: "The Holy Scriptures",
    body: "The Holy Scriptures — Old and New Testaments — are the written Word of God, given by divine inspiration. The Bible is the authoritative revealer of doctrines and the trustworthy record of God's acts in history.",
  },
  {
    num: "02",
    icon: "ti-triangle",
    title: "The Trinity",
    body: "There is one God — Father, Son, and Holy Spirit — a unity of three coeternal Persons. God is immortal, all-powerful, all-knowing, and ever-present, infinite in wisdom and love.",
  },
  {
    num: "10",
    icon: "ti-cross",
    title: "The Experience of Salvation",
    body: "In infinite love and mercy, God made Christ — who knew no sin — to be sin for us, so that in Him we might be made the righteousness of God. We are saved by grace alone, through faith alone, in Christ alone.",
  },
  {
    num: "20",
    icon: "ti-calendar-week",
    title: "The Sabbath",
    body: "The beneficent Creator rested on the seventh day after creation and instituted the Sabbath as a memorial of creation. The Sabbath is a day of joyful rest, worship, and contemplation of God's works — from sunset Friday to sunset Saturday.",
  },
  {
    num: "25",
    icon: "ti-arrows-up",
    title: "The Second Coming of Christ",
    body: "The second coming of Christ is the blessed hope of the church — the grand climax of the gospel. His coming will be literal, personal, visible, and worldwide. At that event the righteous dead will be raised.",
  },
  {
    num: "22",
    icon: "ti-leaf",
    title: "Christian Behaviour",
    body: "We are called to be a godly people who think, feel, and act in harmony with biblical principles. Because our bodies are temples of the Holy Spirit, we are called to care for them intelligently, avoiding anything harmful.",
  },
] as const;

import AnimateIn from "@/components/ui/AnimateIn";

export default function WhatWeBelieve() {
  return (
    <section className="beliefs">
      <div className="beliefs-inner">
        <div className="beliefs-header">
          <div className="section-label">What We Believe</div>
          <h2>
            Grounded in the
            <br />
            <em>Word of God</em>
          </h2>
          <p className="beliefs-sub">
            As a Seventh-day Adventist congregation we hold the{" "}
            <a
              href="https://www.adventist.org/beliefs/"
              target="_blank"
              rel="noopener noreferrer"
              className="beliefs-link"
            >
              28 Fundamental Beliefs
            </a>{" "}
            of the global Adventist Church. Here are six that shape everyday
            life at PESDAC.
          </p>
        </div>
        <AnimateIn className="beliefs-grid" stagger>
          {BELIEFS.map((b) => (
            <article key={b.num} className="belief-card">
              <div className="belief-num">{b.num}</div>
              <div className="belief-icon">
                <i className={`ti ${b.icon}`} />
              </div>
              <h3>{b.title}</h3>
              <p>{b.body}</p>
            </article>
          ))}
        </AnimateIn>
      </div>
    </section>
  );
}
