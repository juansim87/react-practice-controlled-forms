import { useState } from "react";
import "./LoginForm.css";

const INIT_FORM_STATE = {
	user: "",
	password: "",
};

export const LoginForm = () => {
	const userList = [
		{ user: "madevolyk", password: "necnall25" },
		{ user: "frollo", password: "esmeralda" },
		{ user: "daredevil", password: "justice00" },
		{ user: "mickeymouse", password: "miskamuska" },
	];

	const [form, setForm] = useState(INIT_FORM_STATE);
	const [error, setError] = useState("");
    const [isRegistered, setIsRegistered] = useState(false);
	
    const handleInputChange = ({ target: { name, value } }) => {
		setError("");
		setForm((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	const handleClick = () => {
		const userRegistered = userList.find((user) => user.user === form.user && user.password === form.password);

		if (userRegistered) {
            setIsRegistered(true)
			setError("");
			console.log("Bienvenido", userRegistered.user);
		}

		else {
            setIsRegistered(false)
            setError("Fallo de login")}
	};

	return (
		<div className="form">
			<h2>Formulario de Login</h2>
			<input type="text" name="user" onChange={handleInputChange} />
			<input type="text" name="password" onChange={handleInputChange} />
			<button onClick={handleClick}>Login</button>
            {isRegistered && <div><p>Bienvenido {form.user}</p></div>}
			{error && (
				<div>
					<p>Error de Login</p>
				</div>
			)}
		</div>
	);
};
