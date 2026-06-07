type Props = {
  value: string;
  label: string;
};

export default function StatBox({ value, label }: Props) {
  return (
    <div className="stat-box">
      <div className="stat-num">{value}</div>
      <div className="stat-lbl">{label}</div>
    </div>
  );
}
