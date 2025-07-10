import { useState } from "react";
import "./FeedbackForm.css";

export const FeedbackForm = () => {
  const [form, setForm] = useState({ user: "", feedback: "" });
  const [error, setError] = useState("");
  const [feedbackSent, setFeedbackSent] = useState(false);

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
		if (!form.user) return setError("Rellena el campo con tu nombre");
		if (!form.feedback) return setError("Cuéntanos tus sensaciones con nuestro producto");
    setFeedbackSent(true);  
  }

  const handleConfirmation = () => {
    
    console.log("¡Formulario enviado!", form);
  }

  return (
    <div className="form">
      <h2>Formulario de feedback</h2>
      <input type="text" name="user" onChange={handleInputChange} placeholder="Nombre de usuario"/>
      <textarea name="feedback" onChange={handleInputChange} placeholder="Escribe brevemente tu opinión sobre el producto"/>
      <button onClick={onFormSubmit}>Enviar</button>
      {feedbackSent && <div><p>El usuario {form.user} ha enviado el siguiente comentario: "{form.feedback}"</p><button onClick={handleConfirmation}>Confirmar envío</button></div>}
      {error && <div><p>{error}</p></div>}
    </div>
  );
};
