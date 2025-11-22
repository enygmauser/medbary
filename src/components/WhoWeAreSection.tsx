import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import SectionText from "./SectionText";

export default function WhoWeAreSection({ content }) {
  return (
    <SectionWrapper bg="white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="
          relative overflow-hidden
          bg-white rounded-3xl shadow-md border border-slate-200
          p-8 md:p-12
        "
      >
        {/* Cyan Gradient Glow Border */}
        <div
          className="
          absolute inset-0 -z-10 rounded-3xl
          bg-gradient-to-br from-cyan-400/30 via-teal-300/20 to-cyan-200/30
          blur-2xl opacity-60
        "
        ></div>

        {/* Cyan Accent Line */}
        <div className="h-1.5 w-20 bg-cyan-500 rounded-full mb-6"></div>

        {/* Heading */}
        <div className="mb-4">
          <SectionHeading title={content.title} />
        </div>

        {/* Text Content */}
        <div className="text-slate-700 leading-relaxed text-lg md:text-[1.05rem]">
          <SectionText text={content.text} />
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
