import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
	{
		userId: {
			type: String,
			default: null,
		},
		cartId: {
			type: String,
			requied: true,
		},
		items: [
			{
				productId: String,
				title: String,
				price: Number,
				quantity: Number,
			},
		],
		totalPrice: {
			type: Number,
			required: true,
		},
		status: {
			type: String,
			default: 'pending',
		},
	},
	{ timestamps: true },
);

export default mongoose.model('Order', orderSchema);
