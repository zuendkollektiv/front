"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";

export function HeroSlider() {
  const [images, setImages] = React.useState<string[]>([]);

  React.useEffect(() => {
    async function fetchImages() {
      const response = await fetch("/api/images");
      const data = await response.json();
      setImages(data.map((file: string) => `/slider/${file}`));
    }
    fetchImages();
  }, []);

  const plugin = React.useMemo(
    () => [
      Fade(),
      Autoplay({
        delay: 5000, // 5 seconds
        stopOnInteraction: true, // stops auto-play on user interaction
        // stopOnMouseEnter: true, // optional: stops auto-play on mouse enter
      }),
    ],
    [],
  );

  return (
    <div className="relative h-screen w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={plugin}
        className="h-full w-full"
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="relative h-screen w-full">
                <Image
                  src={src}
                  alt={`Fireworks ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
      <div className="absolute inset-0 flex items-center bg-black bg-opacity-50 pt-16 md:pt-96">
        <div className="container mx-auto px-4">
          <div className="relative max-w-md">
            {/* Blur and dark overlay */}
            <div
              className="absolute inset-0 -m-96"
              style={{
                background: `
                radial-gradient(
                  circle at center,
                  rgba(0,0,0,0.95) 0%,
                  rgba(0,0,0,0.75) 10%,
                  rgba(0,0,0,0.65) 15%,
                  rgba(0,0,0,0.60) 20%,
                  rgba(0,0,0,0.55) 25%,
                  rgba(0,0,0,0.50) 30%,
                  rgba(0,0,0,0.30) 35%,
                  rgba(0,0,0,0.20) 40%,
                  rgba(0,0,0,0.15) 45%,
                  rgba(0,0,0,0.10) 50%,
                  rgba(0,0,0,0.05) 55%,
                  transparent 60%
                  )
                `,
              }}
            ></div>
            <div className="relative text-white">
              <h1 className="hidden">zündkollektiv</h1>
              <h2 className="font-pirata text-3xl mb-2">about</h2>
              <p>
                zündkollektiv is a collective of artists, technicians and
                scientists constantly exploring and pushing the boundaries of
                explosives and fire as means of artistic expression. we strive
                for experimental and artistic productions beyond the commercial
                show biz. we are based in berlin, leipzig and hamburg and are
                set to light up spaces around the globe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
