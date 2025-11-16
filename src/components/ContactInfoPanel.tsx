export default function ContactInfoPanel({ info }) {
  return (
    <div
      className="
      backdrop-blur-xl 
      bg-white/60 
      border border-slate-200/50 
      rounded-3xl 
      p-8 
      shadow-[0_8px_30px_rgba(0,0,0,0.06)]
    "
    >
      <h2 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">
        Contact & Hours
      </h2>

      <p className="text-slate-600 mb-4">
        {info.address} · {info.phone}
      </p>

      <ul className="text-slate-700 space-y-3 mb-6">
        {info.hours.map((item) => (
          <li
            key={item.day}
            className="flex justify-between border-b border-slate-200/40 pb-2"
          >
            <span>{item.day}</span>
            <span className="font-medium">{item.time}</span>
          </li>
        ))}
      </ul>

      <p className="text-slate-600">Email: {info.email}</p>
    </div>
  );
}
