type Props = {
  label: string;
  title: string;
};

export default function SectionHeader({ label, title }: Props) {
  return (
    <>
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
    </>
  );
}
