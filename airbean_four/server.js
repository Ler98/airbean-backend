import dotenv from 'dotenv';
import app, { connectDb } from './app.js';

dotenv.config();

connectDb();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
