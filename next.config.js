const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

console.log('Using api endpoint: ', process.env.API_URL);

module.exports = withPlugins([withImages], {
	async redirects() {
		return [
			{
				source: '/authentication/login',
				destination: '/dashboard',
				permanent: true
			}
		];
	},
	env: {
		NEXT_PUBLIC_API_URL: process.env.API_URL,
		NEXT_PUBLIC_BUILDER_API: process.env.BUILDER_API
	}
});
