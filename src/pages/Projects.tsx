import { projectsPage } from '../content/site';
import { CtaBand, GallerySection, PageHero, StatsBand, Steps } from '../sections/Blocks';
import { CaseStudies, ProjectTypes, SiteLog } from '../sections/ProjectBlocks';

export default function Projects() {
  const { hero, stats, types, lifecycle, siteLog, caseStudies, gallery, cta } = projectsPage;
  const hasCases = caseStudies.length > 0;
  return (
    <>
      <PageHero {...hero}>
        <StatsBand stats={stats} />
      </PageHero>
      <ProjectTypes {...types} />
      <Steps {...lifecycle} />
      <SiteLog {...siteLog} />
      <CaseStudies items={caseStudies} />
      <GallerySection {...gallery} alt={!hasCases} />
      <CtaBand {...cta} />
    </>
  );
}
