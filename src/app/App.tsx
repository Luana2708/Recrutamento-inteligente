import { lazy, Suspense, useState } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Footer } from "./components/Footer";
import { NotificationSystem } from "./components/NotificationSystem";
import type { Candidate, Job } from "./types";

const BenefitsSection = lazy(() =>
  import("./components/BenefitsSection").then((module) => ({ default: module.BenefitsSection })),
);
const RecruitmentSection = lazy(() =>
  import("./components/RecruitmentSection").then((module) => ({ default: module.RecruitmentSection })),
);
const ResumesSection = lazy(() =>
  import("./components/ResumesSection").then((module) => ({ default: module.ResumesSection })),
);
const MatchSimulatorSection = lazy(() =>
  import("./components/MatchSimulatorSection").then((module) => ({ default: module.MatchSimulatorSection })),
);
const DashboardSection = lazy(() =>
  import("./components/DashboardSection").then((module) => ({ default: module.DashboardSection })),
);
const BlogSection = lazy(() =>
  import("./components/BlogSection").then((module) => ({ default: module.BlogSection })),
);
const Chatbot = lazy(() =>
  import("./components/Chatbot").then((module) => ({ default: module.Chatbot })),
);

function SectionFallback() {
  return <div className="h-32 bg-muted/30" aria-hidden="true" />;
}

export default function App() {
  const [createdJobs, setCreatedJobs] = useState<Job[]>([]);
  const [createdCandidates, setCreatedCandidates] = useState<Candidate[]>([]);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <NotificationSystem />
        <Header />
        <main>
          <HeroSection
            onCreateJob={(job) => setCreatedJobs((current) => [job, ...current])}
            onCreateCandidate={(candidate) => setCreatedCandidates((current) => [candidate, ...current])}
          />
          <Suspense fallback={<SectionFallback />}>
            <BenefitsSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <RecruitmentSection createdJobs={createdJobs} />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <ResumesSection createdCandidates={createdCandidates} />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <MatchSimulatorSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <DashboardSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <BlogSection />
          </Suspense>
        </main>
        <Footer />
        <Suspense fallback={null}>
          <Chatbot />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}
