import Footer from '@/components/Footer';
import HappeningNow from '@/components/HappeningNow';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Trending from '@/components/Trending';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="w-full">
        <Hero />

        <Trending />

        <HappeningNow />
      </main>

      <Footer />
    </div>
  );
}
