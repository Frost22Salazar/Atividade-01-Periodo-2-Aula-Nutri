import React, { useEffect, useState } from "react";
import './App.css'; // Importação do arquivo CSS

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

    fetch(url)
      .then((r) => r.json())
      .then((json) => {
        setNutri(json);
      });
  }, []);

  return (
    <div className="container">
      <header className="header">
        <strong>React Nutri</strong>
      </header>
      <ul className="posts">
        {nutri.map((item) => {
          return (
            <article key={item.id} className="post">
              <strong className="post-title">{item.titulo}</strong>
              <img src={item.capa} alt={item.titulo} className="post-image" />
              <p className="post-subtitle">{item.subtitulo}</p>
              <span className="post-category">{item.categoria}</span>
            </article>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
