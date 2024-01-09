import express from "express";
import cors from "cors";

export class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.routes();
    this.config();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
  }

  routes() {
    this.app.use("/", (req, res) => {
      return res.json({ message: "Hello World!" });
    });
  }
}

export default new App().app;
