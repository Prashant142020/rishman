import { Hero } from '@/components/section/hero';
import { NewsSection } from '@/components/section/news-section';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <NewsSection />
    </div>
  );
}
