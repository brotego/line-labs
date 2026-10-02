import type { Metadata } from "next";
import ArrowIcon from "@/components/ArrowIcon";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work — line labs",
  description:
    "Twenty websites designed and built by line labs, a small studio for founders, artists, and teams starting their next chapter.",
};

export default function Work() {
  return (
    <>
      <Header />

      <main id="main">

        <section className="work work-index">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Work</span>
              <h1 className="section-title">Twenty chapters, so far.</h1>
              <p className="page-lede">Every project we&apos;ve shipped since 2021, newest first.</p>
            </div>

            <div className="work-index-list">
              {projects.map((project) => (
                <a href="#" className="work-index-row" key={project.number}>
                  <span className="work-index-number">{project.number}</span>
                  <div className={`work-index-thumb ${project.thumb}`}></div>
                  <div className="work-index-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="work-index-mini">
                      <span className="thumb-2"></span>
                      <span className="thumb-3"></span>
                    </div>
                  </div>
                  <span className="work-index-tag">{project.tag}</span>
                  <span className="work-index-year">{project.year}</span>
                  <ArrowIcon className="work-index-arrow" />
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
