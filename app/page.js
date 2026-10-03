import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArrowIcon from '@/components/ArrowIcon';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'line labs — thoughtful websites, built for your next chapter',
  description: 'line labs is a small studio designing and building considered websites for founders, artists, and teams starting their next chapter.',
};

const featured = [
  [
    { name: 'Nova Finance', blurb: 'A calm, confident site for a fintech built on trust.', tag: 'Brand & Web', thumb: 1 },
    { name: 'Aster Studio', blurb: 'An architecture portfolio that gives the work room to breathe.', tag: 'Portfolio', thumb: 2 },
  ],
  [
    { name: 'Fernweh', blurb: 'A travel goods shop designed to feel like the trip already started.', tag: 'E-commerce', thumb: 3 },
    { name: 'Beacon Health', blurb: 'Marketing site and docs for a clinical scheduling platform.', tag: 'Product', thumb: 4 },
  ],
];

const stats = [
  ['Founded', '2021'],
  ['Based in', 'Remote, worldwide'],
  ['Projects shipped', '40+'],
  ['Active clients', '3 at a time'],
];

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
              {featured.map((row, i) => (
                <div className="work-row" key={i}>
                  {row.map((p) => (
                    <article className="work-card" key={p.name}>
                      <div className={`work-thumb thumb-${p.thumb}`}>
                        <span className="work-tag">{p.tag}</span>
                      </div>
                      <div className="work-meta">
                        <h3>{p.name}</h3>
                        <p>{p.blurb}</p>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>

            <Link href="/work" className="work-view-all">
              View all 20 projects
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
                {stats.map(([label, value]) => (
                  <div className="stat" key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
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
