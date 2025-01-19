import express from "express";
import userRoutes from  "./routes/userRoute";


const app = express();
const port = 3000;

app.use("/api/user", userRoutes);

app.listen(port);