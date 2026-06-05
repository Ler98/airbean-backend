import mongoose from 'mongoose';

const KeySchema = new mongoose.Schema({
	key: {
		type: String,
		required: true,
		unique: true,
	},
});

const Key = mongoose.models.Key || mongoose.model('Key', KeySchema);
export default Key;
