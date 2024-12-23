import type { NextConfig } from "next";
const { withPlausibleProxy } = require("next-plausible");

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = withPlausibleProxy({
  customDomain: "https://stats.bvpk.org",
  selfHosted: true,
})(nextConfig);

export default nextConfig;
