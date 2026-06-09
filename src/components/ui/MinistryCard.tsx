import Link from "next/link";

type Props = {
  icon: string;
  title: string;
  description: string;
  color?: string;
  href?: string;
};

export default function MinistryCard({ icon, title, description, color, href }: Props) {
  const inner = (
    <>
      {color && (
        <div
          className="prog-card-img"
          aria-hidden="true"
          style={{
            background: `linear-gradient(145deg, ${color} 0%, #1a0a00 100%)`,
          }}
        >
          <i className={`ti ${icon}`} />
        </div>
      )}
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
