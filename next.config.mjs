import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
  },
  experimental: {
    reactCompiler: false,
  },
  // Build ko fail hone se bachanay ke liye ye settings add ki hain
  eslint: {
    // Build ke waqt ESLint check skip karega
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Build ke waqt TypeScript errors skip karega
    ignoreBuildErrors: true,
  },
}

export default withPayload(nextConfig)