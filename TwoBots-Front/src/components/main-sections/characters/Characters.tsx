import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Characters.css";

const characters = [
  { id: 1, name: "Character 1" },
  { id: 2, name: "Character 2" },
  // Añade más personajes según sea necesario
];

const Characters = () => {
  const location = useLocation();
  const isCreateCharacterPage = location.pathname === "/create-character";

  return (
    <div className="characters">
      {!isCreateCharacterPage && (
        <div className="character-card create-character">
          <Link to="/create-character" className="create-character-link">
            <div className="plus-icon">+</div>
          </Link>
        </div>
      )}
      {characters.map((character) => (
        <div key={character.id} className="character-card">
          <h2 className="character-name">{character.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Characters;
