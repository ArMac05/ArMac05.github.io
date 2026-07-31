import { Skill } from "@/types/skill";
import Tag from "./tag";
import * as motion from "motion/react-client";

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
    <motion.div whileHover={{ scale: 1.1 }} className={className}>
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
