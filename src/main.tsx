import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { fetchAuthSession } from 'aws-amplify/auth';
//import { secret } from '@aws-amplify/backend';

// console.log(secret("FMP_API_KEY"));

Amplify.configure(outputs, {
  API: {
    REST: {
      headers: async () => {
        const session: any = await fetchAuthSession();
        const token: any = session.tokens?.idToken;
        return { Authorization: token };
      }
    }
  }
});

const existingConfig = Amplify.getConfig();
Amplify.configure({
  ...existingConfig,
  API: {
    ...existingConfig.API,
    REST: outputs.custom.API
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
