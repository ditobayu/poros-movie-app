export default function DetailContentSection({
  label,
  content,
}: {
  label: string;
  content: string | number;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-semibold">{label}</span>
      <span>{content}</span>
    </div>
  );
}
