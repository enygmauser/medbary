export default function SpecialtyCard({ title, Icon }) {
  const isMui = Icon.muiName !== undefined; // Detect MUI icons

  return (
    <div
      className="
        flex flex-col items-center justify-center
        bg-gradient-to-br from-white to-slate-50
        rounded-2xl shadow-sm
        border border-slate-200
        h-40 w-40
        cursor-pointer
        hover:shadow-xl hover:-translate-y-2 hover:border-slate-300
        transition-all duration-300 ease-out
        select-none
        p-4
      "
    >
      {isMui ? (
        <Icon
          className="text-indigo-600 drop-shadow-sm"
          sx={{ fontSize: 44 }}
        />
      ) : (
        <Icon className="text-cyan-600  drop-shadow-sm" />
      )}

      <p className="text-cyan-800 text-sm font-semibold mt-3 text-center px-2 leading-tight">
        {title}
      </p>
    </div>
  );
}
