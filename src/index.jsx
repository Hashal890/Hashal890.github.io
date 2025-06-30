import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals.js";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);

reportWebVitals();
