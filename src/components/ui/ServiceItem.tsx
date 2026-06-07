type Props = {
  label: string;
  value: string;
  sub: string;
};

export default function ServiceItem({ label, value, sub }: Props) {
  return (
    <div className="service-item">
      <div className="lbl">{label}</div>
      <div className="val">{value}</div>
      <div className="sub">{sub}</div>
    </div>
  );
}
