import Tag from "@/components/tag";
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full h-screen bg-hero-background px-12 py-16 flex items-center"
    >
      <div className="flex flex-col items-start gap-6 max-w-3xl">
        <Tag
          text="Open to Internships"
          className="flex flex-col items-center justify-center bg-Cream/12 w-48 h-8 rounded-2xl border border-chip-border font-bold text-Cream text-center"
        ></Tag>
        <div className="">
          <p className="font-bold text-6xl text-Cream">Hi, I'm Arlim Macaldo</p>
        </div>
        <div>
          <p className="font-medium text-3xl text-Cream-Dimmed">
            CS Student at UNLV, focused on data engineering - building reliable
            pipelines and turning messy data into something usable.
          </p>
        </div>
        <button className="bg-Coral font-bold text-base rounded-xl w-34 h-12">
          View Resume
        </button>
      </div>
    </section>
  );
}
