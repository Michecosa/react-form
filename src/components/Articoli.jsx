import React, { useState } from "react";

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

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Articoli</h2>

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
