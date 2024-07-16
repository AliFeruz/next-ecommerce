
import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { cookies } from "next/headers";


export const wixClientServer = async () => {
  let refreshToken;

  try {
    const Cookies = cookies();
    refreshToken = JSON.parse(Cookies.get("refreshToken")?.value || "{}");
  } catch (e) {}

  const wixClient = createClient({
    modules: {
      products,
      collections,
    },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
      tokens: {
        accessToken: {
          value: "",
          expiresAt: 0,
        },
        refreshToken,
      },
    }),
  });

  return wixClient;
};
