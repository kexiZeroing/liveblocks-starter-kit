import type { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUser } from "@/lib/database";

export const authConfig: NextAuthConfig = {
  // Configure one or more authentication providers
  // More info: https://next-auth.js.org/providers/
  providers: [
    // CredentialsProvider is used for the demo auth system
    // Replace this with a real provider, e.g. GitHub, Auth0
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
        },
      },
      async authorize(credentials) {
        if (!credentials || typeof credentials.email !== "string") {
          throw new Error("No credentials or email");
        }

        const user: User | null = await getUser(credentials.email);

        if (!user) {
          throw new Error("User not found");
        }

        return {
          id: user.id,
          name: user.name,
          email: user.id,
          image: user.avatar,
        };
      },
    }),
  ],
};
