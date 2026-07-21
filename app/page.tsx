import { Tag } from "./components";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <div className="w-screen h-screen bg-hero-background">
        <div className="flex flex-col items-start max-w-1/2 m-24 mt-36 gap-6">
          <Tag
            text="Open to Internships"
            className="flex flex-column items-center justify-center bg-Cream/12 w-48 h-8 rounded-2xl border border-chip-border"
            text_className="font-bold text-Cream text-center"
          ></Tag>
          <div className="">
            <p className="font-bold text-6xl text-Cream">
              Hi, I'm Arlim Macaldo
            </p>
          </div>
          <div>
            <p className="font-medium text-3xl text-Cream-Dimmed">
              CS Student at UNLV, focused on data engineering - building
              reliable pipelines and turning messy data into something usable.
            </p>
          </div>
          <button className="bg-Coral font-bold text-base rounded-xl w-34 h-12">
            View Resume
          </button>
        </div>
      </div>
    </div>
  );
}
