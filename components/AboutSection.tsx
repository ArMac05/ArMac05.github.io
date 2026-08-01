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
    <section id="about" className="bg-white px-12 py-16">
      <div className="mx-auto max-w-[1080px]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <p className="text-gold-label text-xl font-normal">ABOUT</p>
          <div className="grid grid-cols-3">
            <div className="flex flex-col">
              <div className="w-3xs h-70 bg-hero-background rounded-xl text-center">
                Photo Placeholder
              </div>
              <p className="text-charcoal-ink font-medium text-xl">
                Arlim Macaldo
              </p>
              <p className="text-ash-muted-text font-normal italic text-medium">
                “Quote”
              </p>
            </div>
            <div className="flex flex-col col-span-2 gap-6">
              <p className="text-charcoal-ink font-medium text-3xl">
                I like the unglamorous part of data - the pipelines that quietly
                just work.
              </p>
              <p className="text-charcoal-ink font-normal text-medium">
                I’m a CS student at UNLV focused on data engineering. Most of my
                projects start with a messy, real-world data source and end with
                something clean and queryable that someone can actually build
                on. I love working on scalable systems, debugging complex data
                flows, and turning messy data into reliable models.
              </p>
              <p className="text-ash-muted-text font-normal text-medium">
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
          <p className="text-gold-label text-lg font-normal mt-25 mb-4">
            SKILLS &amp; TOOLS
          </p>
          <motion.section
            variants={list}
            id="skills"
            className="flex flex-1 gap-4 justify-between"
          >
            {skills.map((skills) => (
              <SkillCard
                key={skills.category}
                className="flex flex-col gap-4 w-full h-auto text-charcoal-ink text-lg font-medium bg-paper rounded-2xl border-default-hairline-border border-1 p-3 py-4"
                skill={skills}
              ></SkillCard>
            ))}
          </motion.section>
        </motion.div>
      </div>
    </section>
  );
}
