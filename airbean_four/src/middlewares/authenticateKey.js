import Key from '../models/KeyModel.js';

export const authenticateKey = async (req, res, next) => {
	try {
		const apiKey = req.headers['x-api-key'];

		if (!apiKey) {
			return res.status(401).json({
				success: false,
				message: 'API key missing',
			});
		}
		const validKey = await Key.findOne({ key: apiKey });

		if (!validKey) {
			return res.status(403).json({
				success: false,
				message: 'Invalid API key',
			});
		}

		next();
	} catch (error) {
		res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};
export default authenticateKey;
