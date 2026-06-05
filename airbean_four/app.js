import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import express from 'express';
import mongoose from 'mongoose';
import KeyRouter from './src/routes/key.route.js';
import MenuRoute from './src/routes/Menuroute.js';
import authRouter from './src/routes/auth.route.js';
import cartRouter from './src/routes/Cart.Routes.js';
import OrderRoute from './src/routes/OrderRoute.js';

const app = express();
const swaggerdocs = YAML.load('./src/docs/docs.yml');

app.use(express.json());
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerdocs));

app.use('/api/keys', KeyRouter);
app.use('/api/menu', MenuRoute);
app.use('/api/auth', authRouter);
app.use('/api/carts', cartRouter);
app.use('/api/orders', OrderRoute);

export const connectDb = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
	} catch (error) {}
};

export default app;
