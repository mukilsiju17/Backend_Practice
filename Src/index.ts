
import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./dbConnection.ts";
import router from "./route.ts";

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.get("/", (_req: Request, res: Response) => {
  res.status(404).json({ message: "Enter the Proper URL" });
});

const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 7000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error: Error) => {
    console.error("Error connecting to the database:", error.message);
    process.exit(1);
  });
