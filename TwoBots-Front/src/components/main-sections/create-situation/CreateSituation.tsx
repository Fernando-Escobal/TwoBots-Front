import React, { useState } from "react";
import "./CreateSituation.css";

const CreateSituation = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [character1, setCharacter1] = useState<string | null>(null);
  const [character2, setCharacter2] = useState<string | null>(null);

  const handleCreateSituation = () => {
    // Lógica para crear la situación
    console.log("Situación creada:", {
      title,
      description,
      character1,
      character2,
    });
  };

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    setCharacter: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    event.preventDefault();
    const characterId = event.dataTransfer.getData("characterId");
    setCharacter(characterId);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div className="create-situation">
      <div className="create-situation-form">
        <div className="situation-form-top">
          <div className="situation-form-title-div-aux"></div>
          <input
            type="text"
            className="situation-form-title"
            placeholder="Título de la Situación"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="situation-form-mid">
          <div className="situation-form-characters">
            <div
              className="situation-form-character-drop"
              onDrop={(event) => handleDrop(event, setCharacter1)}
              onDragOver={handleDragOver}
            >
              {character1
                ? `Personaje 1: ${character1}`
                : "Arrastra un personaje aquí"}
            </div>
            <div
              className="situation-form-character-drop"
              onDrop={(event) => handleDrop(event, setCharacter2)}
              onDragOver={handleDragOver}
            >
              {character2
                ? `Personaje 2: ${character2}`
                : "Arrastra un personaje aquí"}
            </div>
          </div>
          <textarea
            className="situation-form-description"
            placeholder="Descripción de la Situación"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="situation-form-bottom">
          <button
            className="situation-form-submit"
            onClick={handleCreateSituation}
          >
            Crear Situación
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateSituation;
