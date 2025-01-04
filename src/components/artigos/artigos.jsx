import React from "react";
import "./styles-artigos.css";


export class Artigo extends React.Component {
  render(){
    return(
      <article>
        <img src={this.props.imagem} alt={this.props.titulo} />
        <div className="aritgos1">
        <h2>{this.props.titulo}</h2>
        <p>{this.props.texto}</p>
        </div>
      </article>
    )
  }
}