import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
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
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "base-uri 'self'",
              "frame-ancestors 'none'",
              "form-action 'self' https://tally.so",
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
              "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com",
              "img-src 'self' data: https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline'",
              "font-src 'self' data:",
              "upgrade-insecure-requests",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
