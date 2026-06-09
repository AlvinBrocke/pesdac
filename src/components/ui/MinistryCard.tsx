import Link from "next/link";

type Props = {
  icon: string;
  title: string;
  description: string;
  href?: string;
};

export default function MinistryCard({ icon, title, description, href }: Props) {
  const inner = (
    <>
      <div className="prog-icon">
        <i className={`ti ${icon}`} aria-hidden="true" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="prog-card">
        {inner}
      </Link>
    );
  }

  return <div className="prog-card">{inner}</div>;
}
