import { withNextVideo } from "next-video/process";
import { withPlausibleProxy } from "next-plausible";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

const combinedConfig = withPlausibleProxy({
  customDomain: "https://stats.bvpk.org",
})(nextConfig);

export default withNextVideo(combinedConfig);
