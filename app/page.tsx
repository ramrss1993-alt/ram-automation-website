import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import AutomationShowcase from "@/components/AutomationShowcase";
import WhyRamAutomation from "@/components/WhyRamAutomation";
import Industries from "@/components/Industries";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white dark:bg-black">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <HowItWorks />
        <AutomationShowcase />
        <WhyRamAutomation />
        <Industries />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
