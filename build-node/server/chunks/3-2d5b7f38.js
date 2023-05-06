import { b as private_env } from './shared-server-b7e48788.js';

async function load({ url }) {
  if (!url.searchParams.has("code")) {
    return {};
  }
  let authEndpoints = await retrieveAuthEndpoints();
  let tokenBody = new URLSearchParams();
  tokenBody.append("grant_type", "authorization_code");
  tokenBody.append("client_id", private_env.CLIENT_ID || "212205468813164598@website");
  tokenBody.append("client_secret", private_env.CLIENT_SECRET || "ZhTynXTX2q5onLbwS0qhyFvh8LymZkw4ZyhQ71K7XE7mQfEZDLvMNP7wZShkLHEP");
  tokenBody.append("redirect_uri", `${private_env.BASE_URL || "http://localhost:5173"}/auth/redirect`);
  tokenBody.append("code", url.searchParams.get("code") || "");
  let tokenResponse = await fetch(authEndpoints.token_endpoint, {
    method: "POST",
    body: tokenBody,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
  let token = await tokenResponse.json();
  let userResponse = await fetch(authEndpoints.userinfo_endpoint, {
    headers: {
      Authorization: `Bearer ${token.access_token}`
    }
  });
  let userData = await userResponse.json();
  return {
    token,
    user_data: userData
  };
}
async function retrieveAuthEndpoints() {
  let response = await fetch(`${private_env.AUTH_URL || "https://authmensa.luminos.dev"}/.well-known/openid-configuration`);
  let data = await response.json();
  return data;
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
const component = async () => (await import('./_page.svelte-916027eb.js')).default;
const server_id = "src/routes/auth/redirect/+page.server.js";
const imports = ["_app/immutable/entry/auth-redirect-page.svelte.ab8d149b.js","_app/immutable/chunks/index.1a09564c.js","_app/immutable/chunks/store.669eface.js","_app/immutable/chunks/index.36402250.js"];
const stylesheets = ["_app/immutable/assets/_page.ee3a75c9.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=3-2d5b7f38.js.map
