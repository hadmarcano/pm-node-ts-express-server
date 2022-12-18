import express, { Application } from "express";
import routerHealth from "./helpers/health";
import handlerErrors from "./helpers/errors";
class App {
   readonly expressApp: Application;

   constructor() {
      this.expressApp = express();
      this.mountHealthCheck();
      // this.mountRoutes();
      this.mountErrors();
   }

   mountHealthCheck() {
      this.expressApp.use("/", routerHealth);
   }

   mountRoutes(): void {
      // this.expressApp.use("/user");
   }

   mountErrors(): void {
      this.expressApp.use(handlerErrors.notFound);
   }
}

export default new App().expressApp;
