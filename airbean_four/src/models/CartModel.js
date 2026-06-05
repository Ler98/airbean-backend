import mongoose from 'mongoose';

const cartItemsSchema = new mongoose.Schema(
	{
		prodId: { type: String, required: true },
		title: String,
		price: Number,
		qty: { type: Number, required: true },
	},
	{ _id: false },
);

const cartSchema = new mongoose.Schema(
	{
		cartId: { type: String, required: true, unique: true },
		userId: { type: String },
		items: [cartItemsSchema],
	},
	{ timestamps: true },
);

export default mongoose.model('Cart', cartSchema);
