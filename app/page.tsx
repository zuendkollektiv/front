import { HeroSlider } from "@/components/hero-slider";
import { References } from "@/components/references";
import { VideoSection } from "@/components/video-section";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Page() {
  const headerHeight = 60; // Adjust this value based on your header height

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <section
          id="about"
          style={{ paddingTop: headerHeight, marginTop: -headerHeight }}
        >
          <HeroSlider />
        </section>
        <section
          id="references"
          style={{ paddingTop: headerHeight, marginTop: -headerHeight }}
        >
          <References />
        </section>
        <section
          id="action"
          style={{ paddingTop: headerHeight, marginTop: -headerHeight }}
        >
          <VideoSection />
        </section>
      </main>
      <Footer />
    </>
  );
}
