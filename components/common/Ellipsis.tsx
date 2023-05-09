const style = {
  textOverflow: "ellipsis",
  // whiteSpace: "nowrap",
  overflow: "hidden",
  display: "inline-block",
};

export default function Ellipsis({
  text,
  maxWidth = 250,
}: {
  text: string;
  maxWidth?: number;
}) {
  // FIXME
  // return <span style={{ ...style, maxWidth }}>{text}</span>;
  return <span>{text}</span>;
}
