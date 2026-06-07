type Props = {
  num: string;
  title: string;
  date: string;
};

export default function SermonRow({ num, title, date }: Props) {
  return (
    <div className="sermon-row">
      <span className="sermon-num">{num}</span>
      <div className="sermon-info">
        <h4>{title}</h4>
        <span>{date}</span>
      </div>
      <i className="ti ti-player-play" />
    </div>
  );
}
