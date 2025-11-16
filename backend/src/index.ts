import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes";
import boardRoutes from "./routes/boardRoutes";
import permissionRoutes from "./routes/permissionRoutes";
import elementRoutes from "./routes/elementRoutes";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", userRoutes);
app.use("/boards", boardRoutes);
app.use("/permissions", permissionRoutes);
app.use("/elements", elementRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

