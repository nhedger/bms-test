const checkInternetConnection = async () => {
	try {
		await fetch("https://balena.io");
		return true;
	} catch {
		return false;
	}
};

Bun.serve({
	port: 8080,
	async fetch(req) {
		const internetUp = await checkInternetConnection();
		return new Response(`Internet: ${internetUp}`);
	},
});
