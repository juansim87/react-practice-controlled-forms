import { useState } from "react";
import "./RatingForm.css";

export const RatingForm = () => {
  const [rating, setRating] = useState(1);

  const handleChange = (event) => {
    setRating(event.target.value);
    console.log("Valoración cambiada");
  };

  return (
    <div className="form">
      <h2>Formulario de calificación de producto</h2>
      <div className="rating-buttons">
        <button value={1} onClick={handleChange}>
          1
        </button>
        <button value={2} onClick={handleChange}>
          2
        </button>
        <button value={3} onClick={handleChange}>
          3
        </button>
        <button value={4} onClick={handleChange}>
          4
        </button>
        <button value={5} onClick={handleChange}>
          5
        </button>
      </div>
      <p>Has valorado el producto con un {Number(rating)} sobre 5.</p>
    </div>
  );
};
