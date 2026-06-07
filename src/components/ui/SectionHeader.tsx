type Props = {
  label: string;
  title: string;
};

export default function SectionHeader({ label, title }: Props) {
  return (
    <>
      <div className="section-label">{label}</div>
      <div className="section-title">{title}</div>
    </>
  );
}
