import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import SectionText from "./SectionText";

export default function PhilosophySection({ content }) {
  return (
    <SectionWrapper bg="slate-50">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading title={content.title} />
        <SectionText text={content.text} />
      </motion.div>

      {/* List Items */}
      <div className="mt-8 space-y-4">
        {content.list.map((item: string, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start"
          >
            <div className="h-3 w-3 mt-2 rounded-full bg-teal-600"></div>

            <p className="text-slate-700 text-[1.05rem] leading-relaxed">
              {item}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
