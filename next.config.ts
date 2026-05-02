import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/issues/emotional-overload",
        destination: "/issues/when-emotions-take-over",
        permanent: true,
      },
      {
        source: "/ukraine-project",
        destination: "/evidence/ukraine-2022",
        permanent: true,
      },
      {
        source: "/issues/trauma",
        destination: "/issues/trauma-and-past-events",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
