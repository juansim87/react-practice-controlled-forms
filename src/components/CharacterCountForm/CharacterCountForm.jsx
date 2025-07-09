import { useState } from "react";
import "./CharacterCountForm.css";

export const CharacterCountForm = () => {
	const [counter, setCounter] = useState(0);

	const characterCounter = (event) => {
		setCounter(event.target.value.length);
	};

	return (
		<div className="form">
			<h2>Contador de caracteres</h2>
			<input type="text" onChange={characterCounter} />
			<p>Caracteres escritos: {counter}</p>
		</div>
	);
};
