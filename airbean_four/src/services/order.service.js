import Order from '../models/OrderModel.js';
import Cart from '../models/CartModel.js';

export const getOrders = async (req, res) => {
	const orders = await Order.find();

	res.status(200).json({
		success: true,
		orders,
	});
};

export const getOrdersByUserId = async (req, res) => {
	const { userId } = req.params;

	const orders = await Order.find({ userId });

	res.status(200).json({
		success: true,
		orders,
	});
};

export const createOrder = async (req, res) => {
	const { cartId } = req.body;

	if (!cartId) {
		return res.status(400).json({
			success: false,
			message: 'cartId is required',
		});
	}

	const cart = await Cart.findOne({ cartId });

	if (!cart) {
		return res.status(404).json({
			success: false,
			message: 'Cart not found',
		});
	}

	if (!cart.items || cart.items.length === 0) {
		return res.status(400).json({
			success: false,
			message: 'Cart is empty',
		});
	}

	const totalPrice = cart.items.reduce((sum, item) => {
		const price = Number(item.price);
		const quantity = Number(item.qty);
		return sum + price * quantity;
	}, 0);

	const order = await Order.create({
		userId: cart.userId || null,
		cartId: cart.cartId,
		items: cart.items,
		totalPrice,
	});

	await Cart.deleteOne({ cartId });

	res.status(201).json({
		success: true,
		message: 'Order created',
		order,
	});
};
