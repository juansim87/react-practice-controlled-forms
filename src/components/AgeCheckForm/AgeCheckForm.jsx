import { useState } from "react";

export const AgeCheckForm = () => {
	const [ageCheck, setAgeCheck] = useState(false);
	const [age, setAge] = useState(0);
	const [error, setError] = useState("");

	const handleInputChange = (event) => {
		setAge(event.target.value);
	};

	const handleAgeCheck = () => {
		if (age < 0) {
			setError("Introduce una edad válida");
		}
		if (age >= 18) {
			setAgeCheck(true);
		} else {
			setAgeCheck(false);
		}
	};

	return (
		<div>
			<h2>Check de mayoría de edad</h2>
			<input type="number" value={age} onChange={handleInputChange} />
			<button onClick={handleAgeCheck}>¿Soy mayor de edad?</button>
			{ageCheck ? <p>Eres un adulto, compórtate</p> : <p>Vuelve a jugar a los tazos, enano mielda</p>}
            {/* Renderiza el alert dos veces, buscar en la clase anterior y, si no, consultar con Juan */}
            {error && alert("Introduce una edad válida")};
		</div>
	);
};
