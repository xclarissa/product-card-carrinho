import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import "./index.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.ts";
import { GlobalStyle } from "./styles/global.ts";
import { CartProvider } from "./contexts/CartContext/index.tsx";
import { SearchProvider } from "./contexts/SearchContext/index.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <CartProvider>
          <SearchProvider>
            <GlobalStyle />
            <App />
          </SearchProvider>
        </CartProvider>
    </ThemeProvider>
  </React.StrictMode>
);
