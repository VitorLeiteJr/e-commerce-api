import express from "express";
import userRoutes from  "./routes/userRoute";
import cors from "cors";
import productRoutes from "./routes/productRoutes";
import cartRoutes from "./routes/cartRoutes";



const app = express();
const port = 3000;

app.use(express.json());
app.use(cors()); // Enable CORS

app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart", cartRoutes);



app.listen(port);