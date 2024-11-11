import React, { useState } from "react";
import "./CreateCharacter.css";

const CreateCharacter = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");

  const handleGeneratePhoto = () => {
    // Lógica para generar la foto del personaje
    setPhoto("url-de-la-foto-generada");
  };

  const handleCreateCharacter = () => {
    // Lógica para crear el personaje
    console.log("Personaje creado:", { name, description, photo });
  };

  return (
    <div className="create-character-form">
      <div className="form-top">
        <input
          type="text"
          className="form-title"
          placeholder="Nombre del Personaje"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-mid">
        <textarea
          className="form-description"
          placeholder="Descripción del Personaje"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="form-line-aux">
          <div className="form-line"></div>
        </div>
        <div className="form-file-upload" onClick={handleGeneratePhoto}>
          {photo ? (
            <img src={photo} alt="Personaje" />
          ) : (
            "Generar Foto del Personaje"
          )}
        </div>
      </div>
      <div className="form-bottom">
        <button className="form-submit" onClick={handleCreateCharacter}>
          Crear Personaje
        </button>
      </div>
    </div>
  );
};

export default CreateCharacter;
