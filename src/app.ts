import express from "express";
import router from "./routes";
import cors from "cors";

function createApp() {
    const app = express();

    app.use(express.json());
    app.use("/api", router);

    // const corsOptions = {
    //     origin: ["http://localhost:3333", "http://localhost:8080"],
    //     method: ["GET", "POST"],
    // }

    // app.use(cors(corsOptions));
    app.use(cors());

    return app;
}

export default createApp;

