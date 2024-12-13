import { PublicClientApplication } from "@azure/msal-browser";
import { useState, useEffect } from "react";

const msalConfig = {
  auth: {
    clientId: "YOUR_CLIENT_ID",
    authority: "https://login.microsoftonline.com/YOUR_TENANT_ID",
    redirectUri: "http://localhost:3000",
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const accounts = msalInstance.getAllAccounts();
    if (accounts.length > 0) {
      setUser(accounts[0]);
    }
  }, []);

  const signIn = async () => {
    try {
      const response = await msalInstance.loginPopup({
        scopes: ["User.Read"],
      });
      const account = response.account;
      if (account.username.endsWith("@aui.ma")) {
        setUser(account);
      } else {
        alert("Only @aui.ma emails are allowed.");
        signOut();
      }
    } catch (error) {
      console.error("Login failed: ", error);
    }
  };

  const signOut = () => {
    msalInstance.logout();
    setUser(null);
  };

  return { user, signIn, signOut };
};
