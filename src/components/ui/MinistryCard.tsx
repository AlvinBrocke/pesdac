type Props = {
  icon: string;
  title: string;
  description: string;
};

export default function MinistryCard({ icon, title, description }: Props) {
  return (
    <div className="prog-card">
      <div className="prog-icon">
        <i className={`ti ${icon}`} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
