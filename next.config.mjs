import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@premier/config', '@premier/shared-types', '@premier/api-client'],
};

export default withNextIntl(nextConfig);
