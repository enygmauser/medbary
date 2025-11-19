export default function SpecialtyCard({ title, Icon }) {
  return (
    <div
      className="
        flex flex-col items-center justify-center
        bg-white rounded-2xl shadow-sm
        border border-slate-200
        h-36 w-36
        cursor-pointer
        hover:shadow-md hover:-translate-y-1 transition-all
        select-none
      "
    >
      <Icon className="text-red-600" sx={{ fontSize: 44 }} />
      <p className="text-slate-700 text-sm font-medium mt-2 text-center px-2">
        {title}
      </p>
    </div>
  );
}
