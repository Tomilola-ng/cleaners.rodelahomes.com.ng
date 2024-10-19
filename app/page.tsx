import AboutUsSection from "@/components/Home/AboutUs";
import HeroSection from "@/components/Home/Hero";
import ServicesSection from "@/components/Home/Secvices";

export default function Home() {
  return (
    <main role="main">
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
    </main>
  );
}
