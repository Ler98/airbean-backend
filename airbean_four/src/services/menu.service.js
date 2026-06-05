import Menu from '../models/MenuModel.js';

export const getMenu = async (req, res) => {
	try {
		const menu = await Menu.find();

		res.status(200).json({
			success: true,
			menu,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'Could not fetch menu',
		});
	}
};
