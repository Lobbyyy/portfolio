let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config.mjs')
} catch (e) {
  try {
    userConfig = await import("./v0-user-next.config");
  } catch (innerError) {
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Short links used as Instagram DM keyword replies (AMBITION, PATCH); UTMs let PostHog funnels separate DM traffic. Temporary so the targets can move later.
  async redirects() {
    return [
      { source: '/ambition', destination: '/resources/agent-skills/be-ambitious?utm_source=instagram&utm_medium=dm&utm_campaign=ambition', permanent: false },
      { source: '/patch', destination: '/resources/engineering/php-security-oct-2026?utm_source=instagram&utm_medium=dm&utm_campaign=patch', permanent: false },
    ]
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
}

if (userConfig) {
  const config = userConfig.default || userConfig

  for (const key in config) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...config[key],
      }
    } else {
      nextConfig[key] = config[key]
    }
  }
}

export default nextConfig
