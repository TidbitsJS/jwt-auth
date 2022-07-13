require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");
const connectDB = require("./db/connect");

const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.set("trust proxy", 1);
app.use(helmet());
app.use(cors());
app.use(mongoSanitize());

app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (error) {
    console.error(error);
  }
};

start();
