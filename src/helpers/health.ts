import { Router, Request, Response } from "express";

class RouterHealth {
   readonly expressRouter: Router;

   constructor() {
      // The order of methods matter!
      this.expressRouter = Router();
      this.mountRoutes();
   }

   mountRoutes() {
      this.expressRouter.get("/", (req: Request, res: Response) => {
         res.send("ALl is ok");
      });
      this.expressRouter.get("/healthcheck", (req: Request, res: Response) => {
         res.send("ALl is ok");
      });
      this.expressRouter.get("/healthz", (req: Request, res: Response) => {
         res.send("ALl is ok");
      });
   }
}

export default new RouterHealth().expressRouter;
