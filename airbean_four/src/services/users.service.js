import User from '../models/usersModel.js';

//add new user
export const addNewUser = async (req, res) => {
	const { username, password, role } = req.body;

	if (!username || !password) {
		return res.status(400).json({
			success: false,
			message: 'Username and password are required',
		});
	}

	if (password.length < 8) {
		return res.status(400).json({
			success: false,
			message: 'Lösenordet måste innehålla minst 8 tecken',
		});
	}

	if (username.length < 4) {
		return res.status(400).json({
			success: false,
			message: 'Användarnamnet måste innehålla minst 4 tecken',
		});
	}

	const existingUser = await User.findOne({ username });

	if (existingUser) {
		return res.status(409).json({
			success: false,
			message: 'User already exists',
		});
	}

	const user = await User.create({
		userId: crypto.randomUUID().substring(0, 5),
		username,
		password,
		role: role || 'user',
	});

	res.status(201).json({
		success: true,
		message: 'User registered',
		user,
	});
};

//Login user
export const loginUser = async (req, res) => {
	const { username, password } = req.body;

	if (!username || !password) {
		return res.status(400).json({
			success: false,
			message: 'Username and password are required',
		});
	}

	const user = await User.findOne({ username, password });

	if (!user) {
		return res.status(401).json({
			success: false,
			message: 'Invalid username or password',
		});
	}

	global.user = user;

	res.status(200).json({
		success: true,
		message: 'User logged in',
		user,
	});
};
