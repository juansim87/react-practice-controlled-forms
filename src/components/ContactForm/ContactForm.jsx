import { useState } from "react";
import "./ContactForm.css";

const INITIAL_FORM_STATE = {
	user: "",
	email: "",
	reason: "",
	message: "",
};

export const ContactForm = () => {
	const [form, setForm] = useState(INITIAL_FORM_STATE);
	const [selection, setSelection] = useState("");
	const [error, setError] = useState("");

	const handleInputChange = ({ target: { name, value } }) => {
		setError("");
		setForm((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	const onFormSubmit = () => {
		setError("");
		if (!form.user) return setError("Tienes que rellenar el campo nombre completo");
		if (!form.email) return setError("Tienes que rellenar el campo email");
		if (!form.message) return setError("Escribe un mensaje explicando la razón del contacto");
		console.log("Formulario enviado", form);
	};

	const handleSelect = (event) => {
		setSelection(event.target.value);
		console.log(selection);
	};

	return (
		<div className="form">
			<h2>Formulario de contacto</h2>
			<input
				type="text"
				name="user"
				value={form.user}
				placeholder="Nombre completo"
				onChange={handleInputChange}
			/>
			<input type="email" name="email" value={form.email} placeholder="Email" onChange={handleInputChange} />
			<select value={form.reason} onChange={handleSelect}>
				<option value="" disabled>
					¿Cuál es el motivo del contacto?
				</option>
				<option name="query" value="query">
					Consulta
				</option>
				<option name="support" value="support">
					Soporte
				</option>
				<option name="others" value="others">
					Otros
				</option>
			</select>
			<input
				type="textarea"
				name="message"
				value={form.message}
				placeholder="Describe brevemente tu consulta"
				onChange={handleInputChange}
			/>
			<button type="submit" onClick={onFormSubmit}>
				Enviar
			</button>
			{error && <div className="form-error">{error}</div>}
		</div>
	);
};
