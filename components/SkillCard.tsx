import { Skill } from "@/types/skill";
import Tag from "./tag";

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
    <div className={className}>
      <p className={text_className}>{skill.category}</p>
      <div className="h-0.5 w-full bg-gold-primary" />
      <div className="flex flex-col gap-2">
        {skill.names.map((name) => (
          <Tag
            key={name}
            text={name}
            className="bg-cream border-gold-primary text-sm text-gold-text"
          />
        ))}
      </div>
    </div>
  );
}

export default SkillCard;
