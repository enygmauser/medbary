import React from "react";
import { Box } from "@mui/material";

export default function FeatureCard({ title, description, image }) {
  return (
    <Box className="rounded-2xl bg-white border border-slate-200 shadow-[0_10px_30px_rgba(2,6,23,0.08)] overflow-hidden flex flex-col">
      {/* IMAGE */}
      <img src={image} alt="" className="w-full h-52 object-cover" />

      {/* CONTENT */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>

        <p className="text-slate-600 text-sm leading-relaxed">{description}</p>

        <button className="text-teal-600 font-semibold text-sm mt-1 hover:underline w-fit">
          Read More →
        </button>
      </div>
    </Box>
  );
}
