import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { router } from "./routes/AppRouter";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Toaster } from "./components/ui/toaster";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <HelmetProvider>
        <ApolloProvider client={client}>
          <Provider store={store}>
            <RouterProvider router={router} />
          </Provider>
        </ApolloProvider>
        <Toaster />
      </HelmetProvider>
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
