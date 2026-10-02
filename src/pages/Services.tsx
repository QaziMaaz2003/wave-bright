import { home, servicesPage } from '../content/site';
import {
  Anatomy,
  Callout,
  CardGrid,
  CtaBand,
  GallerySection,
  PageHero,
  Split,
  StatsBand,
  Steps,
} from '../sections/Blocks';

export default function Services() {
  const { hero, stats, categories, testsExplained, gallery } = servicesPage;
  return (
    <>
      <PageHero {...hero}>
        <StatsBand stats={stats} />
      </PageHero>

      {/* Five distinct service areas, each with its own anchor (PDF recommendation) */}
      {categories.map((c, i) => (
        <Split
          key={c.id}
          id={c.id}
          eyebrow={c.eyebrow}
          title={c.title}
          paragraphs={[c.text]}
          list={c.list}
          image={c.image}
          imageAlt={c.imageAlt}
          reverse={i % 2 === 1}
          alt={i % 2 === 1}
          cta={i === categories.length - 1 ? { label: 'Request a bid', to: '/contact#bid' } : undefined}
        />
      ))}

      <CardGrid
        id={testsExplained.id}
        eyebrow={testsExplained.eyebrow}
        title={testsExplained.title}
        intro={testsExplained.intro}
        items={testsExplained.items}
        alt
      >
        <Callout icon="file" title={testsExplained.packageTitle} text={testsExplained.packageText} />
      </CardGrid>
      <Anatomy {...home.anatomy} plain />
      <Steps {...home.process} />
      <GallerySection {...gallery} />
      <CtaBand {...home.cta} />
    </>
  );
}
