import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {AppRoutes} from "./routes";

createConnection().then(async () => {});

const app = express();
app.use(bodyParser.json());

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello world");
});

AppRoutes.forEach(route => {
    app[route.method](route.path, (request: express.Request, response: express.Response, next: Function) => {
        route.action(request, response)
            .then(() => next)
            .catch(err => next(err));
    });
});

export default app;
