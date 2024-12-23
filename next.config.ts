import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    env: {
        GRAPHQL_API_URL: 'http://localhost:3001/graphql',
    },
}

export default nextConfig
