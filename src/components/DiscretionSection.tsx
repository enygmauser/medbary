import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import SectionText from "./SectionText";

export default function DiscretionSection({ content }) {
  return (
    <SectionWrapper bg="white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          bg-white/80 backdrop-blur-sm 
          rounded-3xl shadow-lg 
          border border-slate-200 
          p-8 md:p-12 
          max-w-4xl mx-auto
        "
      >
        <div className="mb-4">
          <SectionHeading title={content.title} />
        </div>

        <p className="text-slate-700 text-lg leading-relaxed">
          <SectionText text={content.text} />
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
