/* eslint-disable @next/next/no-img-element */
import ArrowIcon from "@/components/ArrowIcon";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { projects } from "@/data/projects";

const featured = projects.slice(0, 4);
const featuredRows = [featured.slice(0, 2), featured.slice(2, 4)];

export default function Home() {
  return (
    <>
      <Header home />

      <main id="main">

        <section className="hero" id="top">
          <div className="hero-art" aria-hidden="true">
            <img src="/assets/swirl.png" alt="" className="swirl-img" />
          </div>
          <div className="wrap hero-inner">
            <div className="hero-copy">
              <h1 className="headline">Good websites.<br />Great first<br />impressions.</h1>
              <p className="subhead">Thoughtful design. Built for your next chapter.</p>
              <a href="#contact" className="btn btn-primary">
                Let&apos;s build yours
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="work" id="work">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Selected work</span>
              <h2 className="section-title">A handful of recent chapters.</h2>
            </div>

            <div className="work-grid">
              {featuredRows.map((row, i) => (
                <div className="work-row" key={i}>
                  {row.map((project) => (
                    <article className="work-card" key={project.number}>
                      <div className={`work-thumb ${project.thumb}`}>
                        <span className="work-tag">{project.tag}</span>
                      </div>
                      <div className="work-meta">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>

            <Link href="/work" className="work-view-all">
              View all {projects.length} projects
              <ArrowIcon />
            </Link>
          </div>
        </section>

        <section className="studio" id="studio">
          <div className="wrap studio-inner">
            <div className="section-head">
              <span className="eyebrow">Studio</span>
              <h2 className="section-title">Small by design.</h2>
            </div>
            <div className="studio-grid">
              <p className="studio-lede">line labs is a small studio designing and building considered websites for founders, artists, and teams starting their next chapter. We keep a short client list on purpose — fewer projects, more attention, better work.</p>
              <dl className="studio-stats">
                <div className="stat">
                  <dt>Founded</dt>
                  <dd>2021</dd>
                </div>
                <div className="stat">
                  <dt>Based in</dt>
                  <dd>Remote, worldwide</dd>
                </div>
                <div className="stat">
                  <dt>Projects shipped</dt>
                  <dd>40+</dd>
                </div>
                <div className="stat">
                  <dt>Active clients</dt>
                  <dd>3 at a time</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="wrap contact-inner">
            <span className="eyebrow">Contact</span>
            <h2 className="contact-title">Let&apos;s build yours.</h2>
            <p className="contact-sub">Tell us a bit about the project and we&apos;ll get back to you within a couple of days.</p>
            <ContactForm />
          </div>
        </section>

      </main>

      <Footer home />
    </>
  );
}
