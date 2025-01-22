import express from "express";
import userRoutes from  "./routes/userRoute";
import cors from "cors";
import productRoutes from "./routes/productRoutes";


const app = express();
const port = 3000;

app.use(express.json());
app.use(cors()); // Enable CORS

app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);


app.listen(port);