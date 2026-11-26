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
  // PostHog reverse proxy: requests go through our own domain so ad blockers don't drop them
  async rewrites() {
    return [
      { source: '/ingest/static/:path*', destination: 'https://eu-assets.i.posthog.com/static/:path*' },
      { source: '/ingest/array/:path*', destination: 'https://eu-assets.i.posthog.com/array/:path*' },
      { source: '/ingest/:path*', destination: 'https://eu.i.posthog.com/:path*' },
    ]
  },
  // Required by the PostHog proxy (its API paths end in a slash)
  skipTrailingSlashRedirect: true,
  // Short links used as Instagram DM keyword replies (AMBITION, PATCH); UTMs let PostHog funnels separate DM traffic. Temporary so the targets can move later.
  async redirects() {
    return [
      { source: '/ambition', destination: '/resources/agent-skills/be-ambitious?utm_source=instagram&utm_medium=dm&utm_campaign=ambition', permanent: false },
      { source: '/patch', destination: '/resources/engineering/php-security-oct-2026?utm_source=instagram&utm_medium=dm&utm_campaign=patch', permanent: false },
      { source: '/free', destination: '/resources/github-repos/awesome-free-apps?utm_source=instagram&utm_medium=dm&utm_campaign=free', permanent: false },
      { source: '/llm', destination: '/resources/github-repos/freellmapi?utm_source=instagram&utm_medium=dm&utm_campaign=llm', permanent: false },
      { source: '/printer', destination: '/resources/github-repos/moneyprinterturbo?utm_source=instagram&utm_medium=dm&utm_campaign=printer', permanent: false },
      { source: '/flow', destination: '/resources/github-repos/ruflo?utm_source=instagram&utm_medium=dm&utm_campaign=flow', permanent: false },
      { source: '/trade', destination: '/resources/github-repos/day-trader-skill?utm_source=instagram&utm_medium=dm&utm_campaign=trade', permanent: false },
      { source: '/edit', destination: '/resources/github-repos/opencut?utm_source=instagram&utm_medium=dm&utm_campaign=edit', permanent: false },
      { source: '/claude', destination: '/resources/github-repos/everything-claude-code?utm_source=instagram&utm_medium=dm&utm_campaign=claude', permanent: false },
      { source: '/design', destination: '/resources/github-repos/ui-ux-pro-max-skill?utm_source=instagram&utm_medium=dm&utm_campaign=design', permanent: false },
      { source: '/video', destination: '/resources/github-repos/wan2gp?utm_source=instagram&utm_medium=dm&utm_campaign=video', permanent: false },
      { source: '/sherlock', destination: '/resources/github-repos/sherlock?utm_source=instagram&utm_medium=dm&utm_campaign=sherlock', permanent: false },
      { source: '/jarvis', destination: '/resources/github-repos/openjarvis?utm_source=instagram&utm_medium=dm&utm_campaign=jarvis', permanent: false },
      { source: '/craft', destination: '/resources/github-repos/craft-anything?utm_source=instagram&utm_medium=dm&utm_campaign=craft', permanent: false },
      { source: '/build', destination: '/resources/github-repos/build-your-own-x?utm_source=instagram&utm_medium=dm&utm_campaign=build', permanent: false },
      { source: '/trilium', destination: '/resources/github-repos/trilium?utm_source=instagram&utm_medium=dm&utm_campaign=trilium', permanent: false },
      { source: '/job', destination: '/resources/github-repos/ai-job-search?utm_source=instagram&utm_medium=dm&utm_campaign=job', permanent: false },
      { source: '/career', destination: '/resources/github-repos/career-ops?utm_source=instagram&utm_medium=dm&utm_campaign=career', permanent: false },
      { source: '/stickman', destination: '/resources/github-repos/stickman-video-director?utm_source=instagram&utm_medium=dm&utm_campaign=stickman', permanent: false },
      { source: '/skills', destination: '/resources/github-repos/pm-skills?utm_source=instagram&utm_medium=dm&utm_campaign=skills', permanent: false },
      { source: '/cad', destination: '/resources/github-repos/solidcraft?utm_source=instagram&utm_medium=dm&utm_campaign=cad', permanent: false },
      { source: '/hacker', destination: '/resources/github-repos/h4cker?utm_source=instagram&utm_medium=dm&utm_campaign=hacker', permanent: false },
      { source: '/cli', destination: '/resources/github-repos/cli-anything?utm_source=instagram&utm_medium=dm&utm_campaign=cli', permanent: false },
      { source: '/loop', destination: '/resources/github-repos/autoresearch?utm_source=instagram&utm_medium=dm&utm_campaign=loop', permanent: false },
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
