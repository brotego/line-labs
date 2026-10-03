import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArrowIcon from '@/components/ArrowIcon';

export const metadata = {
  title: 'Work — line labs',
  description: 'Twenty websites designed and built by line labs, a small studio for founders, artists, and teams starting their next chapter.',
};

const projects = [
  { name: 'Nova Finance', blurb: 'A calm, confident site for a fintech built on trust.', tag: 'Brand & Web', year: 2025 },
  { name: 'Aster Studio', blurb: 'An architecture portfolio that gives the work room to breathe.', tag: 'Portfolio', year: 2025 },
  { name: 'Fernweh', blurb: 'A travel goods shop designed to feel like the trip already started.', tag: 'E-commerce', year: 2024 },
  { name: 'Beacon Health', blurb: 'Marketing site and docs for a clinical scheduling platform.', tag: 'Product', year: 2024 },
  { name: 'Meridian Capital', blurb: 'Investor-facing site for a growth equity firm.', tag: 'Brand & Web', year: 2024 },
  { name: 'Northlight Coffee', blurb: 'Subscription storefront for a small-batch roaster.', tag: 'E-commerce', year: 2024 },
  { name: 'Fable & Co', blurb: "Identity and site for a children's publishing house.", tag: 'Brand & Web', year: 2023 },
  { name: 'Origin Studio', blurb: 'A tightly-edited portfolio for a product design duo.', tag: 'Portfolio', year: 2023 },
  { name: 'Harbor Analytics', blurb: 'Dashboard marketing site for a shipping data platform.', tag: 'Product', year: 2023 },
  { name: 'Cobalt Robotics', blurb: 'Technical yet approachable site for a robotics startup.', tag: 'Brand & Web', year: 2023 },
  { name: 'Loam Ceramics', blurb: 'Shop and studio journal for a ceramics maker.', tag: 'E-commerce', year: 2023 },
  { name: 'Verve Fitness', blurb: 'App landing page for a strength-training platform.', tag: 'Product', year: 2022 },
  { name: 'Static Records', blurb: 'Label site and release archive for an independent label.', tag: 'Brand & Web', year: 2022 },
  { name: 'Kindred Care', blurb: 'Booking and info site for an in-home care service.', tag: 'Product', year: 2022 },
  { name: 'Bright Path Legal', blurb: 'A plain-language site for a family law practice.', tag: 'Brand & Web', year: 2022 },
  { name: 'Quiet Hours', blurb: 'Sleep goods shop with a slow, unhurried feel.', tag: 'E-commerce', year: 2021 },
  { name: 'Foundry Goods', blurb: 'Storefront for a small hardware and tool maker.', tag: 'E-commerce', year: 2021 },
  { name: 'Alcove Interiors', blurb: 'Project archive for an interior design studio.', tag: 'Portfolio', year: 2021 },
  { name: 'Tidewater Marine', blurb: 'Site for a boat maintenance and charter company.', tag: 'Brand & Web', year: 2021 },
  { name: 'Lumen Optics', blurb: 'Marketing site for a smart-lighting hardware company.', tag: 'Product', year: 2021 },
];

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
              {projects.map((p, i) => (
                <a href="#" className="work-index-row" key={p.name}>
                  <span className="work-index-number">{String(i + 1).padStart(2, '0')}</span>
                  <div className={`work-index-thumb thumb-${(i % 4) + 1}`}></div>
                  <div className="work-index-info">
                    <h3>{p.name}</h3>
                    <p>{p.blurb}</p>
                    <div className="work-index-mini">
                      <span className="thumb-2"></span>
                      <span className="thumb-3"></span>
                    </div>
                  </div>
                  <span className="work-index-tag">{p.tag}</span>
                  <span className="work-index-year">{p.year}</span>
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
