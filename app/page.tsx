import { Tag } from "./components";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      {/* Hero Card */}
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
      {/* About Me */}
      <div className="w-screen h-screen bg-white">
        <div className="m-24">
          <p className="text-gold-label text-2xl font-medium">About</p>
          <div className="grid grid-cols-3">
            <div className="flex flex-col">
              <div className="w-3xs h-70 bg-hero-background rounded-xl text-center">
                Photo Placeholder
              </div>
              <p className="text-Charcoal-Ink font-medium text-xl">
                Arlim Macaldo
              </p>
              <p className="text-Ash-muted-text font-normal italic text-lg">
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
                something clean and queryable that someone can actually build
                on. I love working on scalable systems, debugging complex data
                flows, and turning messy data into reliable models.
              </p>
              <p className="text-Ash-muted-text font-normal text-medium">
                Right now I’m looking for internships as a part-time for this
                school year or a full-time summer internship where I can
                contribute to real pipelines and learn from experienced
                engineers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
