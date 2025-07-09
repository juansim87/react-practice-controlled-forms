import React from "react";
import "./ContactForm.css";

export const ContactForm = () => {
	return (
		<div className="form">
			<h2>Formulario de contacto</h2>
			<input type="text" name="name" value={""} placeholder="Nombre completo" onChange={""} />
			<input type="email" name="email" value={""} placeholder="Email" onChange={""} />
			<select type="" name="" value={""} placeholder="" onChange={""}>
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
				value={""}
				placeholder="Describe brevemente tu consulta"
				onChange={""}
			/>
		</div>
	);
};
