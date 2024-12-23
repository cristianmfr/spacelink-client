import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    env: {
        GRAPHQL_API_URL: 'https://spacelink-server.onrender.com/graphql',
    },
}

export default nextConfig
