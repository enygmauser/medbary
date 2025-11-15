import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

export default function EmergencyCard() {
  const [isOpen, setIsOpen] = useState(true);

  // Simple logic to determine open/closed state (you can enhance later)
  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();
    // Open 8AM–8PM
    setIsOpen(hour >= 8 && hour < 20);
  }, []);

  return (
    <Box className="rounded-2xl bg-white border border-slate-200 shadow-[0_10px_30px_rgba(2,6,23,0.08)] overflow-hidden">
      {/* TOP SECTION */}
      <div className="p-7 text-white bg-gradient-to-br from-teal-600 to-cyan-500">
        <h3 className="text-2xl font-bold mb-2">Emergency Cases</h3>

        {/* Phone */}
        <a
          href="tel:+191062685255"
          className="inline-flex items-center gap-3 font-semibold text-lg"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6"
            aria-hidden="true"
            fill="white"
          >
            <path d="M2.5 5.5c0-1.1.9-2 2-2h2.3c.9 0 1.7.6 2 1.5l.8 2.4a2 2 0 0 1-.5 2l-1.2 1.2a16 16 0 0 0 6.8 6.8l1.2-1.2a2 2 0 0 1 2-.5l2.4.8c.9.3 1.5 1.1 1.5 2v2.3c0 1.1-.9 2-2 2H18.5C10.3 23 2.9 15.7 2.5 7.5V5.5z" />
          </svg>
          <span>1 910-626-85255</span>
        </a>

        <hr className="border-white/40 my-6" />

        <p className="opacity-95 max-w-[36ch]">
          We provide 24/7 professional emergency help.
        </p>
      </div>

      {/* BOTTOM SECTION */}
      <div className="p-7">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          Opening Hours
          <span
            className={`px-3 py-0.5 rounded-full text-sm border ${
              isOpen
                ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                : "bg-red-50 text-red-700 border-red-200"
            }`}
          >
            {isOpen ? "Open" : "Closed"}
          </span>
        </h3>

        <dl className="grid gap-5 mt-4">
          {[
            { day: "Weekdays", time: "8.00 – 20.00" },
            { day: "Saturday", time: "9:30 – 17:30" },
            { day: "Sunday", time: "9:30 – 15:00" },
          ].map((row) => (
            <div
              key={row.day}
              className="flex justify-between items-center border-t border-slate-200 pt-3"
            >
              <dt className="text-slate-700">{row.day}</dt>
              <dd className="text-slate-900 font-medium">{row.time}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Box>
  );
}
