export interface AuthenticatedUser {
  id: string;
  email: string;
  name: string;
  token: string;
  refreshToken: string;
}

// export type User = Omit<AuthenticatedUser, "id" | "token" | "refresh">;

// ? Select only the email and name fields from AuthenticatedUser
export type User = Pick<AuthenticatedUser, "email" | "name">;
