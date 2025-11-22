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
        className="max-w-3xl mx-auto text-center"
      >
        <SectionHeading title={content.title} />
        <SectionText text={content.text} />
      </motion.div>

      {/* List Items */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {content.list.map((item: string, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="
              bg-white p-6 rounded-2xl shadow-sm border border-slate-200 
              hover:shadow-md hover:-translate-y-1 transition-all
              flex gap-4
            "
          >
            {/* Icon Circle */}
            <div
              className="
                h-10 w-10 shrink-0 rounded-xl flex items-center justify-center 
                bg-gradient-to-br from-cyan-500 to-teal-600 text-white font-semibold
                shadow-md
              "
            >
              {i + 1}
            </div>

            {/* Text */}
            <p className="text-slate-700 text-[1.05rem] leading-relaxed">
              {item}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
