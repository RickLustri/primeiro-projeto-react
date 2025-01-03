// Importando o react: ( biblioteca do react )
import React from "react";

// Importando o css:
import "./styles/app.css";

// Importando o componente Header:
import Header from "./components/header/header"

// Componente usando classe: ( chamado de class component )
class App extends React.Component {
  // metodo responsavel por renderizar o componente:
  render() {
    // Retorna um html:
    return (
      // Componente html que sera renderizado:
      <Header />
    );
  }
}

// Exportando o componente:
export default App;
