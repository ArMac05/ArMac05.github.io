import { Tag } from "./index";
import SkillCard from "./SkillCard";
import { skills } from "../data/skills";

export default function AboutSection() {
  return (
    <section id="about" className="bg-paper px-12 py-16">
      <div className="mx-8 max-w-[1080px]">
        <p className="text-gold-label text-xl font-normal">ABOUT</p>
        <div className="grid grid-cols-3">
          <div className="flex flex-col">
            <div className="w-3xs h-70 bg-hero-background rounded-xl text-center">
              Photo Placeholder
            </div>
            <p className="text-Charcoal-Ink font-medium text-xl">
              Arlim Macaldo
            </p>
            <p className="text-Ash-muted-text font-normal italic text-medium">
              "Quote"
            </p>
          </div>
          <div className="flex flex-col col-span-2 gap-6">
            <p className="text-Charcoal-Ink font-medium text-3xl">
              I like the unglamorous part of data - the pipelines that quietly
              just work.
            </p>
            <p className="text-Charcoal-Ink font-normal text-medium">
              I'm a CS student at UNLV focused on data engineering. Most of my
              projects start with a messy, real-world data source and end with
              something clean and queryable that someone can actually build on.
              I love working on scalable systems, debugging complex data flows,
              and turning messy data into reliable models.
            </p>
            <p className="text-Ash-muted-text font-normal text-medium">
              Right now I’m looking for internships as a part-time for this
              school year or a full-time summer internship where I can
              contribute to real pipelines and learn from experienced engineers.
            </p>
          </div>
        </div>

        {/* Skills and Tools */}
        <p className="text-gold-label text-lg font-normal mt-25">
          SKILLS & TOOLS
        </p>
        <section id="skills" className="flex flex-1 gap-2">
          {skills.map((skills) => (
            <SkillCard
              key={skills.category}
              className="flex flex-col gap-2 w-80 h-auto text-Charcoal-Ink text-lg font-medium bg-Paper rounded-2xl border-Default-Hairline-Border border-1 p-3 py-4"
              skill={skills}
            ></SkillCard>
          ))}
        </section>
      </div>
    </section>
  );
}
