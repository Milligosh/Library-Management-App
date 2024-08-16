import express from "express";
import users from "../../modules/users/routes/index";

const api = express.Router();

api.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to My App API",
  });
});

api.use("/users", users);

export default api;
