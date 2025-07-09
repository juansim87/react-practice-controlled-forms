import { useState } from "react";

const colorLabels = {
    red: "Rojo",
    blue: "Azul",
    green: "Verde",
    yellow: "Amarillo"
}

export const FavoriteColorForm = () => {
	const [favorite, setFavorite] = useState("");
    const [selectedColor, setSelectedColor] = useState("");

    const handleInputChange = (event) => {
        setSelectedColor(event.target.value)
    }
    
    const handleClick = () => {
        setFavorite(selectedColor);
    };

	return (
		<div>
			<h2>Select de color favorito</h2>
			<select value={selectedColor} onChange={handleInputChange}>
				<option value="">Elige tu color</option>
				<option value="red">Rojo</option>
				<option value="blue">Azul</option>
				<option value="green">Verde</option>
				<option value="yellow">Amarillo</option>
			</select>
			<button onClick={handleClick}>Enviar</button>
			{favorite !== "" && <p>Tu color favorito es el {colorLabels[favorite]}</p>}
		</div>
	);
};
