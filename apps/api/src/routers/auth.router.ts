import { AuthController } from "@/controllers/auth.controller";
import { verifyToken } from "@/lib/jwt";
import { Router } from "express";

export class AuthRouter {
    private router: Router;
    private authController: AuthController;

    constructor() {
        this.authController = new AuthController();
        this.router = Router();
        this.initializeRouter();
    }

    private initializeRouter(): void {
        this.router.post("/register", this.authController.registerController);
        this.router.post("/login", this.authController.loginController);
        this.router.post(
            "/forgot-password", 
            this.authController.forgotPasswordController
        );
        this.router.patch(
            "/reset-password",
            verifyToken,
            this.authController.resetPasswordController
        );
    }

    getRouter(): Router {
        return this.router
    }
}