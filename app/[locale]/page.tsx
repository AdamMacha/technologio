import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { Services } from '@/components/services';
import { CTA } from '@/components/cta';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <CTA />
    </>
  );
}