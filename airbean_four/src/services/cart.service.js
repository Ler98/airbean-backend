import mongoose from 'mongoose';
import Cart from '../models/CartModel.js';
import Menu from '../models/MenuModel.js';

//Alla kundvagnar
export const getAllCarts = async (req, res) => {
	const carts = await Cart.find();

	res.status(200).json({
		success: true,
		carts,
	});
};

//En specifik kundvagn
export const getCartById = async (req, res) => {
	const { cartId } = req.params;

	const cart = await Cart.findOne({ cartId });
	if (!cart) {
		return res.status(404).json({
			success: false,
			message: 'Cart not found',
		});
	}
	res.status(200).json({
		success: true,
		cart,
	});
};

//uppdatera cart
export const updateCart = async (req, res) => {
	const { prodId, qty } = req.body;

	let cartId = req.body.cartId;

	if (!prodId || qty === undefined) {
		return res.status(400).json({
			success: false,
			message: 'prodId and qty are required',
		});
	}
	if (qty < 0) {
		return res.status(400).json({
			success: false,
			message: 'qty cannot be negative',
		});
	}

	const product = await Menu.findOne({ prodId });

	if (!product) {
		return res.status(404).json({
			success: false,
			message: 'Product does not exist in menu',
		});
	}

	if (global.user) {
		cartId = global.user.userId;
	}

	if (!cartId) {
		cartId = crypto.randomUUID().substring(0, 5);
	}

	let cart = await Cart.findOne({ cartId });

	if (!cart) {
		cart = await Cart.create({
			cartId,
			userId: global.user ? global.user.userId : undefined,
			items: [],
		});
	}

	const existingItem = cart.items.find((item) => item.prodId === prodId);

	if (existingItem) {
		if (qty === 0) {
			cart.items.filter((item) => item.prodId !== prodId);
		} else {
			existingItem.qty = qty;
		}
	} else {
		if (qty > 0) {
			cart.items.push({
				prodId: prodId,
				title: product.title,
				price: product.price,
				qty,
			});
		}
	}

	await cart.save();

	res.status(200).json({
		success: true,
		message: 'Cart updated',
		cartId,
		cart,
	});
};
