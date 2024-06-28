import { AuthDetails, Permissions } from "../../app/schemas";
import { ForControlAuthenticating } from "../../ports/drivens/for-control-authenticating";

const authDetailsMock: AuthDetails = {
    token: "wdefwqsadfweq",
    refreshToken: "wdefwqsadfweq"
}

export const PermissionsMock: Permissions = {
    admin: true,
    user: true
}

export class ControlAuthenticatorStub implements ForControlAuthenticating {
    getAuthDetails(_email: string, _password: string): Promise<AuthDetails> {
        return Promise.resolve(authDetailsMock);
    }

    getPermissions(_email: string, _password: string): Promise<Permissions> {
        return Promise.resolve(PermissionsMock);
    }

}
    