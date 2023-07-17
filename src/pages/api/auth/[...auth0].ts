// pages/api/auth/[auth0].js
import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export default handleAuth({
  async login(req, res) {
    try {
      await handleLogin(req, res, {
        authorizationParams: {
          audience: "https://snippet-api.com", // or AUTH0_AUDIENCE
          // Add the offline_access scope to also get a Refresh Token
          scope: "openid profile email read:snippets write:snippets", // or AUTH0_SCOPE
        },
      });
    } catch (error: any) {
      res.status(error.status || 400).end(error.message);
    }
  },
});
