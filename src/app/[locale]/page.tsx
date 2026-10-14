import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { TechnologySection } from '@/components/home/TechnologySection';
import { GallerySection } from '@/components/home/GallerySection';
import { ContactSection } from '@/components/home/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TechnologySection />
      <GallerySection />
      <ContactSection />
    </>
  );
}
