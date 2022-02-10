/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        domains: [
            'avatars.dicebear.com',
            'links.papareact.com',
            'avatars.githubusercontent.com',
        ],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        formats: ['image/avif', 'image/webp'],
    },
    env: {
        NEXT_PUBLIC_MORALIS_APP_ID: process.env.NEXT_PUBLIC_MORALIS_APP_ID,
        NEXT_PUBLIC_MORALIS_SERVER_URL:
            process.env.NEXT_PUBLIC_MORALIS_SERVER_URL,
    },
}
