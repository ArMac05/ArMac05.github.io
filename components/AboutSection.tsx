import * as motion from "motion/react-client";
import SkillCard from "./SkillCard";
import { skills } from "../data/skills";

const container = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

const list = {
  visible: {
    transition: { delayChildren: 0.5, staggerChildren: 0.1 },
  },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-white px-6 py-12 scroll-mt-20 md:px-12 md:py-16"
    >
      <div className="mx-auto max-w-[1080px]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <p className="text-gold-label text-lg font-normal md:text-xl">
            ABOUT
          </p>
          <div className="mt-4 grid grid-cols-1 gap-6 md:mt-6 md:grid-cols-3 md:gap-8">
            {/* Compact avatar row on phones, portrait card on desktop. */}
            <div className="flex flex-row items-center gap-4 md:flex-col md:items-start md:gap-0">
              <div className="flex h-24 w-24 flex-none items-center justify-center rounded-xl bg-hero-background p-2 text-center text-[11px] text-cream md:h-70 md:w-3xs md:text-base">
                AM
              </div>
              <div className="md:mt-2">
                <p className="text-charcoal-ink font-medium text-lg md:text-xl">
                  Arlim Macaldo
                </p>
                <p className="text-ash-muted-text font-normal italic text-sm md:text-base"></p>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:col-span-2 md:gap-6">
              <p className="text-charcoal-ink font-medium text-2xl md:text-3xl">
                I like the unglamorous part of data - the pipelines that quietly
                just work.
              </p>
              <p className="text-charcoal-ink font-normal text-base">
                I’m a CS student at UNLV focused on data engineering. Most of my
                projects start with a messy, real-world data source and end with
                something clean and queryable that someone can actually build
                on. I love working on scalable systems, debugging complex data
                flows, and turning messy data into reliable models.
              </p>
              <p className="text-ash-muted-text font-normal text-base">
                Right now I’m looking for internships as a part-time for this
                school year or a full-time summer internship where I can
                contribute to real pipelines and learn from experienced
                engineers.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills and Tools */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-gold-label text-lg font-normal mt-14 mb-4 md:mt-25">
            SKILLS &amp; TOOLS
          </p>
          <motion.section
            variants={list}
            id="skills"
            className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
          >
            {skills.map((skills) => (
              <SkillCard
                key={skills.category}
                className="flex flex-col gap-3 w-full h-auto text-charcoal-ink text-base font-medium bg-paper rounded-2xl border-default-hairline-border border-1 p-3 py-4 md:gap-4 md:text-lg"
                // Two-line room in the 2-up phone grid keeps every gold rule level.
                text_className="min-h-12 md:min-h-0"
                skill={skills}
              ></SkillCard>
            ))}
          </motion.section>
        </motion.div>
      </div>
    </section>
  );
}
