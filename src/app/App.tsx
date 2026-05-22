import { ThemeProvider } from "./components/ThemeProvider";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { RecruitmentSection } from "./components/RecruitmentSection";
import { ResumesSection } from "./components/ResumesSection";
import { DashboardSection } from "./components/DashboardSection";
import { BlogSection } from "./components/BlogSection";
import { Footer } from "./components/Footer";
import { Chatbot } from "./components/Chatbot";
import { NotificationSystem } from "./components/NotificationSystem";
import { ButtonActionDialog } from "./components/ButtonActionDialog";

export default function App() {
  return (
    <ThemeProvider>
      <ButtonActionDialog>
        <div className="min-h-screen bg-background">
          <NotificationSystem />
          <Header />
          <main>
            <HeroSection />
            <BenefitsSection />
            <RecruitmentSection />
            <ResumesSection />
            <DashboardSection />
            <BlogSection />
          </main>
          <Footer />
          <Chatbot />
        </div>
      </ButtonActionDialog>
    </ThemeProvider>
  );
}
