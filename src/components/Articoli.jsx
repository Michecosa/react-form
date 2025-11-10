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
  const [newArticle, setNewArticles] = useState("");

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Articoli</h2>

      <form className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Aggiungi un articolo..."
        />
        <button type="submit" className="btn btn-primary">
          Aggiungi
        </button>
      </form>
      <ul className="list-group">
        {articoli.map((articolo) => (
          <li key={articolo.id} className="list-group-item">
            {articolo.titolo}
          </li>
        ))}
      </ul>
    </div>
  );
}
