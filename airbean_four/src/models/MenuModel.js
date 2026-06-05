import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
	id: Number,
	title: String,
	desc: String,
	price: Number,
});

const Menu = mongoose.model('Menu', menuSchema);

export default Menu;
