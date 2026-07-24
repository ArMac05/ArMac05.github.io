import { Tag, List_Container } from "./components";

const skills = {
  Languages: ["Python", "SQL", "React", "C++"],
  "Data & Orchestration": ["DBT", "Apache Airlfow", "Spark"],
  "Storage & Cloud": ["BigQuery", "PostgreSQL", "DuckDB"],
  "Dev Tools": ["VScode", "Docker", "Git", "Databricks"],
};

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
      <div className="w-auto h-auto bg-white">
        <div className="m-24">
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

          {/* Skills and Tools */}
          <p className="text-gold-label text-xl font-norma mt-30">
            SKILLS & TOOLS
          </p>
          <div className="flex justify-between gap-2 mt-2">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <List_Container
                  className="flex flex-col gap-2 w-80 h-60 bg-Paper rounded rounded-2xl rounded-Default-Hairline-Border border-2 p-3 py-4"
                  text_className="text-Charcoal-Ink text-xl font-bold"
                  title={category}
                >
                  {items.map((items) => (
                    <div key={items}>
                      <Tag
                        className="w-fit p-1 px-4 bg-Cream rounded rounded-3xl border-gold-primary border-1"
                        text={items}
                        text_className="text-md text-gold-text"
                      ></Tag>
                    </div>
                  ))}
                </List_Container>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
