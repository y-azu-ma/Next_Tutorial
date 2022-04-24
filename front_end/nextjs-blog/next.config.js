/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
}

module.exports = nextConfig

// https://qiita.com/omoriyasuo/items/dfd814d89418fbc3edd3
// module.exports = {
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.node = {
//         fs: 'empty'
//       };
//     }

//     return config;
//   }
// };
