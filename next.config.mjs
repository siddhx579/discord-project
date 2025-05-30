/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "8djb1zsmli.ufs.sh",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;