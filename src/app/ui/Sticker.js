export default function Sticker({ text, color="#ffd166" }){
  return (
    <span className="inline-flex items-center gap-2">
      <span
        className="inline-block px-3 py-1 rounded-full border-2 border-black shadow-[3px_3px_0_0_#1c2b2d]"
        style={{ backgroundColor: color }}
      >
        <span className="text-xs font-extrabold uppercase tracking-wider">{text}</span>
      </span>
    </span>
  );
}