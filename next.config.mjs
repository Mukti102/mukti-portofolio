/** @type {import('next').NextConfig} */

const nextConfig = {
    images : {
        remotePatterns : [
            {
                protocol : "https",
                hostname : "t2.genius.com",
                pathname : "**"
            },
            {
                protocol : "https",
                hostname : "**",
                pathname : "**"
            }
        ]
    },
}
  
  

export default nextConfig;