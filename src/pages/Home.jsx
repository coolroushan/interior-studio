import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import StudioIntro from "../components/studio/StudioIntro";
import ProjectsSection from "../components/projects/ProjectsSection";
import ServicesSection from "../components/services/ServicesSection";
import PhilosophySection from "../components/philosophy/PhilosophySection";
import JournalSection from "../components/journal/JournalSection";
import ContactSection from "../components/contact/ContactSection";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <main className="bg-interior text-interior">
      <Navbar />

      <Hero />

      <StudioIntro />

      <ProjectsSection />

      <ServicesSection />

      <PhilosophySection />

      <JournalSection />

      <ContactSection />

      <Footer />
    </main>
  );
};

export default Home;