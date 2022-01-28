import { createServer } from "miragejs";

if (typeof window !== "undefined" && !window.server) {
  window.server = createServer({
    environment: "development",
    routes() {
      this.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup",
        () => {
          return {
            kind: "identitytoolkit#GetAccountInfoResponse",
            users: [
              {
                localId: "7qqxPUYF1EZTXsOge8PWy87eAxG3",
                email: "sam.selikoff@gmail.com",
                passwordHash: "UkVEQUNURUQ=",
                emailVerified: false,
                passwordUpdatedAt: 1604626718157,
                providerUserInfo: [
                  {
                    providerId: "password",
                    federatedId: "sam.selikoff@gmail.com",
                    email: "sam.selikoff@gmail.com",
                    rawId: "sam.selikoff@gmail.com",
                  },
                ],
                validSince: "1604626718",
                disabled: false,
                lastLoginAt: "1643133392752",
                createdAt: "1604626718157",
                lastRefreshAt: "2022-01-25T17:56:32.752Z",
              },
            ],
          };
        },
        { timing: 1500 }
      );

      this.namespace = "";
      this.passthrough();

      this.passthrough("https://www.googleapis.com/**");
      this.passthrough("https://identitytoolkit.googleapis.com/**");
    },
  });

  window.server.logging = false;
}
