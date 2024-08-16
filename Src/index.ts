import express, { Request, Response, NextFunction } from "express";
import "./config/database/index";
import api from "./config/versioning/v1";
import {
  appErrorHandler,
  genericErrorHandler,
  notFound,
} from "./middleware/error.middleware";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/application", (req: Request, res: Response) => {
  res.send("Hello, World!");
});
app.use("/api/v1", api);
app.use(appErrorHandler);
app.use(genericErrorHandler);
app.use(notFound);
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(error?.code ?? 500).json(error);
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
