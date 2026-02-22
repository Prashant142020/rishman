import { Hero } from '@/components/section/hero';
import { NewsSection } from '@/components/section/news-section';

export const metadata = {
  title: 'Dr. Rishman Jot Kaur Chahal',
  description:
    'Explore the academic journey and professional achievements of Dr. Rishman Jot Kaur Chahal. Dedicated educator with expertise in research, teaching, and academic leadership.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <NewsSection />
    </div>
  );
}
