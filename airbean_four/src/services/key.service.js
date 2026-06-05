import Key from '../models/KeyModel.js';

export const getRandomKey = async (req, res) => {
	try {
		const keys = await Key.find();

		if (!keys.length) {
			return res.status(404).json({
				success: false,
				message: 'No API keys available',
			});
		}

		const randomKey = keys[Math.floor(Math.random() * keys.length)];

		return res.status(200).json({
			success: true,
			key: randomKey.key,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};
