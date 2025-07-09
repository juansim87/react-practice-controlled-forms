import { useState } from "react";

export const AgeCheckForm = () => {
	const [ageCheck, setAgeCheck] = useState(false);
	const [age, setAge] = useState(0);
	const [error, setError] = useState("");

	const handleInputChange = (event) => {
		setAge(Number(event.target.value));
		setError("");
	};

	const handleAgeCheck = () => {
		if (isNaN(age) || age < 0) {
			setError("Introduce una edad válida");
			setAgeCheck(false);
			return;
		}
		setError("");
		setAgeCheck(age >= 18);
	};

	return (
		<div>
			<h2>Check de mayoría de edad</h2>
			<input type="number" value={age} onChange={handleInputChange} />
			<button onClick={handleAgeCheck}>¿Soy mayor de edad?</button>
			{error ? (
				<div className="error">
					<p>{error}</p>
				</div>
			) : ageCheck ? (
				<div className="age-check">
					<p>Eres un adulto, compórtate</p>
				</div>
			) : (
				<div className="age-check">
					<p>Vuelve a jugar a los tazos, enano mielda</p>
				</div>
			)}

			{/* Renderiza el alert dos veces, buscar en la clase anterior y, si no, consultar con Juan */}
		</div>
	);
};
