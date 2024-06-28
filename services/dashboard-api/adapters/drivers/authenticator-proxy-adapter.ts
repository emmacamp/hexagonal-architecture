import { DashboardApi } from "../../app/dashboard-api";
import { AuthenticatedUser, User } from "../../app/schemas/user";
import { ForAuthenticating } from "../../ports/drivers";

export class AuthenticatorProxyAdapter implements ForAuthenticating {

    constructor(private readonly dashboardApi: DashboardApi) {}


    login(email: string, password: string): Promise<AuthenticatedUser> {
        return this.dashboardApi.login(email, password);
    } 
    register(user: User, password: string): Promise<AuthenticatedUser> {
        return this.dashboardApi.register(user, password);
    }
}