import { useState } from "react";

export default function ArticoliList() {
  const [articoli] = useState([
    {
      id: 1,
      titolo: "Learn PHP",
      autore: "Michela",
    },
    {
      id: 2,
      titolo: "(Don't) Learn PHP",
      autore: "Della",
    },
    {
      id: 3,
      titolo: "(Maybe) Learn PHP",
      autore: "Gatta",
    },
  ]);

  const [articles, setArticles] = useState(articoli);
  const [newArticle, setNewArticle] = useState("");

  const deleteArticle = (indexDaEliminare) => {
    const articlesFiltrate = articles.filter(
      (task, indice) => indice !== indexDaEliminare
    );
    setArticles(articlesFiltrate);
  };

  const editArticle = (indexDaModificare) => {
    const nuovoTitolo = prompt("Nuovo titolo dell'articolo:");

    const nuoviArticoli = articles.map((articolo, indice) =>
      indice === indexDaModificare
        ? { ...articolo, titolo: nuovoTitolo }
        : articolo
    );

    setArticles(nuoviArticoli);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newArticle.length === 0) return;

    let maxId = 0;
    articles.forEach((article) => {
      if (article.id > maxId) {
        maxId = article.id;
      }
    });

    const nuovoArticolo = {
      id: maxId + 1,
      titolo: newArticle,
      autore: "Anonimo",
    };

    setArticles([...articles, nuovoArticolo]);
    setNewArticle("");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Articoli</h2>

      <form className="input-group mb-3" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Aggiungi un articolo..."
          value={newArticle}
          onChange={(e) => setNewArticle(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Aggiungi
        </button>
      </form>

      <ul className="list-group">
        {articles.map((articolo, index) => (
          <li
            key={articolo.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {articolo.titolo}
            <div className="d-flex gap-2">
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => editArticle(index)}
              >
                <i className="bi bi-pen-fill"></i>
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => deleteArticle(index)}
              >
                <i className="bi bi-trash-fill"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
