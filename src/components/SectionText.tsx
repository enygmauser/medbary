export default function SectionText({ text }: { text: string }) {
  return (
    <p className="text-slate-700 text-lg leading-relaxed whitespace-pre-line mb-6">
      {text}
    </p>
  );
}
