// Importando o react: ( biblioteca do react )
import React from "react";

// Importando o css:
import "./styles/app.css";

// Importando o componente Header:
import Header from "./components/header/header";
import { Artigo } from "./components/artigos/artigos";

// Importanto as imagens:
import artigo1 from "./assets/images/artigo1.png";
import artigo2 from "./assets/images/artigo2.png";
import artigo3 from "./assets/images/artigo3.png";
import { Contador } from "./components/contador/contador";

// Componente usando classe: ( chamado de class component )
class App extends React.Component {
  // metodo responsavel por renderizar o componente:
  render() {
    // Retorna um html:
    return (
      <>      
        <Header />

        <Contador />

        {/* <section id="artigos">

        <Artigo titulo="Exemplo 1" texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, vel aperiam rem quam nostrum harum eaque quas, necessitatibus vitae excepturi minima architecto placeat quibusdam obcaecati aliquam! Libero, similique molestiae. Quas." imagem={artigo1}/>

        <Artigo titulo="Exemplo 2" texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, vel aperiam rem quam nostrum harum eaque quas, necessitatibus vitae excepturi minima architecto placeat quibusdam obcaecati aliquam! Libero, similique molestiae. Quas." imagem={artigo2}/>

        <Artigo titulo="Exemplo 3" texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, vel aperiam rem quam nostrum harum eaque quas, necessitatibus vitae excepturi minima architecto placeat quibusdam obcaecati aliquam! Libero, similique molestiae. Quas." imagem={artigo3}/>

        <Artigo titulo="Exemplo 1" texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, vel aperiam rem quam nostrum harum eaque quas, necessitatibus vitae excepturi minima architecto placeat quibusdam obcaecati aliquam! Libero, similique molestiae. Quas." imagem={artigo1}/>
        </section> */}
        
      </>
    );
  }
}

// Exportando o componente:
export default App;
