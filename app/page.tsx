import { Header } from '@/components/layout/header';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { ProductPreview } from '@/components/sections/product-preview';
import { CTASection } from '@/components/sections/cta-section';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className='min-h-screen'>
        <HeroSection />
        <AboutSection />
        <ProductPreview />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
