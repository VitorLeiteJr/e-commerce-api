import express from "express";
import userRoutes from  "./routes/userRoute";
import cors from "cors";
import productRoutes from "./routes/productRoutes";
import cartRoutes from "./routes/cartRoutes";
import paymentRoutes from "./routes/paymentRoutes";
import  webhook from "./payment/webhook/routes";


const app = express();
const port = 3001;


app.use(cors()); // Enable CORS

app.use("/api/webhook", webhook)

app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/payment", paymentRoutes);


app.listen(port);