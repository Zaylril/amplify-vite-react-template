import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { fetchAuthSession } from 'aws-amplify/auth';

const session = await fetchAuthSession();
const authToken = session.tokens?.idToken

Amplify.configure(outputs, {
  API: {
    REST: {
      headers: async () => {
        return { Authorization: authToken };
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
