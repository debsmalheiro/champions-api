import express, {Request, Response} from "express";

function createApp() {
    const app = express();

    app.use(express.json());

    app.get('/', (req: Request, res: Response) => {
        res.status(200).json({
            id: 10,
            name: "Neymar",
        });
    });

    return app;
}

export default createApp;

