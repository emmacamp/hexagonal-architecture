import { ControlAuthenticatorStub, RepoQuerierStub } from "../adapters/drivens";
import { AuthenticatorProxyAdapter } from "../adapters/drivers/authenticator-proxy-adapter";
import { DashboardApi } from "./dashboard-api";

const compositionMock = () => {
  const controlAuthenticatorStub = new ControlAuthenticatorStub();
  const repoQuerierStub = new RepoQuerierStub();

  const dashboardApiMock = new DashboardApi(
    controlAuthenticatorStub,
    repoQuerierStub
  );

  const authenticatorProxyAdapter = new AuthenticatorProxyAdapter(
    dashboardApiMock
  );

  return {
    authenticatorProxyAdapter,
  };
};

export const { authenticatorProxyAdapter } = compositionMock();

const registerMock = {
    name: "John Doe",
    email: "jhon@gmail.com",
}

// ? Execute the code with the extension "Code Runner";  
// ? Select all the code and press "Ctrl + Alt + N" Or right-click and select "Run Code"
authenticatorProxyAdapter.login("jhon@gmail.com", "admin123");
authenticatorProxyAdapter.register(registerMock, "password");