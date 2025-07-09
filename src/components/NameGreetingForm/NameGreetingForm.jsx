import { useState } from "react";
import "./NameGreetingForm.css";

export const NameGreetingForm = () => {
	const [form, setForm] = useState({ userName: "" });
	const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false)

	const handleInputChange = ({target: {name, value}}) => {
		
		setError("");
    setIsSubmitted(false);
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const onFormSubmit = () => {
		setError("");
		if (!form.userName.trim()) {
			setError("Debes introducir un nombre");
			return;
		}
		console.log("Formulario enviado", form);
    setIsSubmitted(true);
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
      event.preventDefault();
			onFormSubmit();
		}
	};

	return (
		<div className="form">
			<h2>Form de saludo</h2>
			<input
				type="text"
				name="userName"
				placeholder="¿Cuál es tu nombre?"
				value={form.userName}
				onChange={handleInputChange}
				onKeyDown={handleKeyDown}
			/>
			<button type="button" onClick={onFormSubmit} >
				Saludar
			</button>
			{isSubmitted && <p>¡Hola {form.userName}!</p>}
			{error && <div className="form-error">{error}</div>}
		</div>
	);
};
