/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: (() => {
    let compileConfig = {
      styledComponents: true,
    }
    if (process.env.NODE_ENV === 'production') {
      compileConfig = {
        ...compileConfig,
        reactRemoveProperties: { properties: ['^data-testid$'] },
      }
    }
    return compileConfig
  })(),
  async rewrites() {
    return [
      {
        source: `${process.env.NEXT_PUBLIC_API_BASE_PATH}/:match*`,
        destination: `${process.env.API_BASE_URL}/:match*`,
      },
    ]
  },
}

export default nextConfig
