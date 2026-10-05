import { constructionServices, home, homeHiring, roles, testingServices } from '../content/site';
import {
  Anatomy,
  CardGrid,
  Credentials,
  CtaBand,
  Faq,
  GallerySection,
  Hero,
  Pillars,
  Split,
  Steps,
} from '../sections/Blocks';
import { HiringBand } from '../sections/ProjectBlocks';

export default function Home() {
  const { hero, stats, capabilities, about, anatomy, process, split, pillars, safety, gallery, faq, cta } =
    home;
  return (
    <>
      <Hero {...hero} stats={stats} />
      <CardGrid {...capabilities} />
      <Split
        eyebrow={about.eyebrow}
        title={about.title}
        paragraphs={about.text}
        list={about.bullets}
        image={about.image}
        imageAlt={about.imageAlt}
        cta={about.cta}
        alt
      />
      <Anatomy {...anatomy} plain />
      <Steps {...process} />
      <Split
        id={split.construction.id}
        eyebrow={split.construction.eyebrow}
        title={split.construction.title}
        list={constructionServices}
        listColumns={1}
        image={split.construction.image}
        imageAlt={split.construction.imageAlt}
        cta={{ label: 'All services', to: '/services' }}
      />
      <Split
        id={split.testing.id}
        eyebrow={split.testing.eyebrow}
        title={split.testing.title}
        paragraphs={[split.testing.text]}
        list={testingServices}
        image={split.testing.image}
        imageAlt={split.testing.imageAlt}
        reverse
        alt
      />
      <Pillars {...pillars} />
      <Pillars id="safety" {...safety} alt>
        <Credentials items={safety.credentials} />
      </Pillars>
      <GallerySection {...gallery} />
      <Faq {...faq} />
      <HiringBand {...homeHiring} roles={roles} cta={{ label: 'See careers', to: '/careers' }} />
      <CtaBand {...cta} />
    </>
  );
}
