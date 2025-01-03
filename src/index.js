import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//? setando o root da aplicação:
const root = ReactDOM.createRoot(document.getElementById("root"));

//? renderizando a aplicação:
root.render(
  // usado para verificar se a aplicacao esta funcionando corretamente ( debug - boa pratica )
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
