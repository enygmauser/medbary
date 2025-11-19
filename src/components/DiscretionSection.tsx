import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import SectionText from "./SectionText";

export default function DiscretionSection({ content }) {
  return (
    <SectionWrapper bg="white">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10"
      >
        <div className="mb-4">
          <SectionHeading title={content.title} />
        </div>

        <SectionText text={content.text} />
      </motion.div>
    </SectionWrapper>
  );
}
