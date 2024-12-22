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
  const images = ["/tanzwueste.jpg", "/tanzwueste_2.jpg", "/tultepec.jpg"];

  const plugin = React.useMemo(
    () => [
      Fade(),
      Autoplay({
        delay: 5000, // 5 seconds
        // stopOnInteraction: true, // stops auto-play on user interaction
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
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 pt-16">
        <div className="max-w-2xl text-center">
          <div className="relative">
            {/* Blur and dark overlay */}
            <div
              className="absolute inset-0 -m-96"
              style={{
                background: `
                radial-gradient(
                  circle at center,
                  rgba(0,0,0,0.75) 0%,
                  rgba(0,0,0,0.74) 10%,
                  rgba(0,0,0,0.73) 15%,
                  rgba(0,0,0,0.70) 20%,
                  rgba(0,0,0,0.65) 25%,
                  rgba(0,0,0,0.60) 30%,
                  rgba(0,0,0,0.55) 35%,
                  rgba(0,0,0,0.49) 40%,
                  rgba(0,0,0,0.42) 45%,
                  rgba(0,0,0,0.35) 50%,
                  rgba(0,0,0,0.28) 55%,
                  rgba(0,0,0,0.21) 60%,
                  rgba(0,0,0,0.14) 65%,
                  rgba(0,0,0,0.07) 70%,
                  rgba(0,0,0,0.035) 75%,
                  rgba(0,0,0,0.017) 80%,
                  rgba(0,0,0,0.008) 85%,
                  rgba(0,0,0,0.004) 90%,
                  rgba(0,0,0,0.002) 95%,
                  transparent 100%
                  )
                `,
              }}
            ></div>
            <div className="relative p-8 text-white">
              <h1 className="mb-4 text-4xl font-bold">zündkollektiv</h1>
              <p className="font-mono">
                we are a collective of artists and technicians constantly
                exploring and pushing the boundaries of explosives and fire as
                means of artistic expression. we strive for experimental and
                artistic productions beyond the commercial show business. we are
                based in berlin, leipzig and hamburg and are set to light up
                spaces around the globe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
