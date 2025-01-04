import React from "react";

export class Contador extends React.Component {
  constructor() {
    super();
    this.state = { contador: 0, nome: "", senha: "" };
  }

  render() {
    return (
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>{this.state.contador}</h1>

        <div>
          <button
            onClick={() => {
              this.setState({ contador: this.state.contador - 1 });
            }}
          >
            Diminuir
          </button>
          <button
            onClick={() => {
              this.setState({ contador: this.state.contador + 1 });
            }}
          >
            Aumentar
          </button>
        </div>

        <form>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={this.state.nome}
            onChange={(e) => {
              this.setState({ nome: e.target.value });
            }}
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            value={this.state.senha}
            onChange={(e) => {
              this.setState({ senha: e.target.value });
            }}
          />
          <button>Enviar</button>
        </form>
      </div>
    );
  }
}
