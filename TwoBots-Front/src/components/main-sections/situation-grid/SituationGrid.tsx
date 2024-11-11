import React from "react";
import { Link } from "react-router-dom";
import "./SituationGrid.css";

interface Situation {
  id: number;
  title: string;
  description: string;
  character1: string | null;
  character2: string | null;
  image1: string | null;
  image2: string | null;
}

const situations: Situation[] = [
  {
    id: 1,
    title: "Discusión sobre el cambio climático",
    description:
      "Elsa y Spiderman discuten sobre el cambio climático y el uso de la energía nuclear para producir energía eléctrica. Elsa cree que la energía nuclear es una buena opción para reducir las emisiones de gases de efecto invernadero, mientras que Spiderman piensa que es peligrosa y que deberíamos usar energías renovables. ¿Qué opinas tú? ¿Con quién estás de acuerdo? ¿Por qué? ¿Qué argumentos usarías para convencer a Elsa o a Spiderman? ¿Qué alternativas propondrías? ¿Qué harías tú en su lugar? ¿Qué harías si fueras un superhéroe? ¿Qué harías si fueras un superhéroe y tuvieras superpoderes?",
    character1: "Personaje 1",
    character2: "Personaje 2",
    image1: "https://via.placeholder.com/150",
    image2: "https://via.placeholder.com/150",
  },
  // Agrega más situaciones según sea necesario
];

const SituationGrid: React.FC = () => {
  return (
    <div className="situations">
      <div className="situation-grid">
        <Link to="/create-situation" className="create-situation-card">
          <div className="situation-card">
            <div className="situation-card-inner">
              <div className="situation-card-front">
                <p className="title">Crear Situación</p>
              </div>
              <div className="situation-card-back">
                <div className="plus-icon">+</div>
              </div>
            </div>
          </div>
        </Link>
        {situations.map((situation) => (
          <div key={situation.id} className="situation-card">
            <div className="situation-card-inner">
              <div className="situation-card-front">
                <p className="title">{situation.title}</p>
              </div>
              <div className="situation-card-back">
                <div className="situation-card-top">
                  <img
                    src={situation.image1 ?? "https://via.placeholder.com/150"}
                    alt="character1"
                  />
                  <img
                    src={situation.image2 ?? "https://via.placeholder.com/150"}
                    alt="character2"
                  />
                </div>
                <div className="situation-card-bottom">
                  <p className="situation-card-description">
                    {situation.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SituationGrid;
