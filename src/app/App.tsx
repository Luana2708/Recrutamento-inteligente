import { lazy, Suspense } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Footer } from "./components/Footer";
import { NotificationSystem } from "./components/NotificationSystem";

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
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <NotificationSystem />
        <Header />
        <main>
          <HeroSection />
          <Suspense fallback={<SectionFallback />}>
            <BenefitsSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <RecruitmentSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <ResumesSection />
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
