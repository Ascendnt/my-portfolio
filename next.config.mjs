import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
};
// module.exports = {
//     images: {
//         domains: ['localhost', 'yourDomainName.com'],
//     },
// };

export default nextConfig;





// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
