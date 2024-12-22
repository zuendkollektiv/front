export function VideoSection() {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4 mb-8">
        {/* <h2 className="mb-4 text-center text-3xl font-bold text-white">
          zündkollektiv in action
        </h2> */}
        <p className="font-mono text-center text-gray-400">
          @ Fusion Festival 2019
        </p>
      </div>
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <iframe
          src="https://player.vimeo.com/video/397636421?h=010e5fdd01"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>
    </section>
  );
}
