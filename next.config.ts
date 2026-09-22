import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://storage.googleapis.com/seattle-community-fridge/home/**'),
      new URL('https://storage.googleapis.com/seattle-community-fridge/volunteer/**')],
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
