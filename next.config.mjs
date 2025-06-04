/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.externals.push({
            "utf-8-validate": "commonjhs utf-8-validate",
            bufferutil: "commonjs bufferutil",
        });

        return config;
    },
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