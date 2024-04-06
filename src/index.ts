import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import "dotenv/config";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import errorHandler from "./middlewares/errorHandler";

const app = express();

// Use Helmet!
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    })
);
app.use(helmet());
app.use(morgan("short"));
app.use(cookieParser());

app.get("/cron", async (req, res) => {
    return res.status(200).send("Cronjob executed");
});

app.use("/static", express.static(path.join(__dirname, "../public")));

app.use(errorHandler);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`app running on http://127.0.0.1:${PORT}`);
});
