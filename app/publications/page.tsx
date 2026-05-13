import { Publications } from '@/components/section/publications';
import { Books } from '@/components/section/book';

const page = () => {
  return (
    <main className="min-h-screen bg-background mt-10">
      <Publications />
      <Books />
    </main>
  );
};
export default page;
