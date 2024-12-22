import { HeroSlider } from "@/components/hero-slider";
import { References } from "@/components/references";
import { VideoSection } from "@/components/video-section";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <section id="about">
          <HeroSlider />
        </section>
        <section id="references">
          <References />
        </section>
        <section id="video">
          <VideoSection />
        </section>
      </main>
      <Footer />
    </>
  );
}
