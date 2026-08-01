import * as motion from "motion/react-client";
import Tag from "@/components/tag";
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full min-h-screen bg-hero-background flex items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-6xl mx-auto px-6 md:px-12"
      >
        <div className="flex flex-col items-start gap-6 max-w-3xl">
          <Tag
            text="Open to Internships"
            className="flex flex-col items-center justify-center bg-cream/12 w-48 h-8 rounded-2xl border border-chip-border font-bold text-cream text-center"
          ></Tag>
          <div className="">
            <p className="font-bold text-6xl text-cream">
              Hi, I’m Arlim Macaldo
            </p>
          </div>
          <div>
            <p className="font-medium text-3xl text-cream-dimmed">
              CS Student at UNLV, focused on data engineering - building
              reliable pipelines and turning messy data into something usable.
            </p>
          </div>
          <button className="bg-coral font-bold text-base rounded-xl w-34 h-12">
            View Resume
          </button>
        </div>
      </motion.div>
    </section>
  );
}
