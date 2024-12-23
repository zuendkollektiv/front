import Video from "next-video";
import fusionVideo from "@/videos/zk_tanzwueste_2019.mp4";

export function VideoSection() {
  return (
    <section className="bg-black">
      <h2 className="border-b-[0.5px] border-gray-700 text-center text-4xl font-pirata p-8">
        in action @ fusion festival 2019
      </h2>
      <div>
        <Video src={fusionVideo} />
      </div>
    </section>
  );
}
