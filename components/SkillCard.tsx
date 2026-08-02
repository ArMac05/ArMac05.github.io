import { Skill } from "@/types/skill";
import Tag from "./tag";
import * as motion from "motion/react-client";

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", duration: 5, bounce: 0.5 },
  },
} as const;

interface SkillCardProps {
  skill: Skill;
  className?: string;
  text_className?: string;
}

function SkillCard({
  skill,
  className = "",
  text_className = "",
}: SkillCardProps) {
  return (
    <motion.div
      variants={item}
      // Kept subtle: in the 2-up phone grid a 1.1 lift overlapped the neighbour,
      // and a tap leaves the hover state latched until you tap elsewhere.
      whileHover={{ scale: 1.03 }}
      className={className}
    >
      <p className={text_className}>{skill.category}</p>
      <div className="h-0.5 w-full bg-gold-primary" />
      <div className="flex flex-col gap-2">
        {skill.names.map((name) => (
          <Tag
            key={name}
            text={name}
            className="bg-cream hover:bg-chip-border transition-colors border-gold-primary text-sm text-gold-text"
          />
        ))}
      </div>
    </motion.div>
  );
}

export default SkillCard;
