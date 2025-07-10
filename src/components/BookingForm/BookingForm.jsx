import { useState } from "react";
import "./BookingForm.css";

const INIT_RESERVATION_FORM = { user: "", email: "", date: "" };

export const BookingForm = () => {
  const [form, setForm] = useState(INIT_RESERVATION_FORM);
  const [error, setError] = useState("");
  const [booked, setBooked] = useState(false);
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
    if (!form.user) return setError("Rellena el campo nombre");
    if (!form.email) return setError("Rellena el campo email");
    if (!form.date) return setError("Selecciona una fecha");
    setBooked(true);
    console.log("Formulario enviado", form);
  };

  const handleReset = () => {
    setForm(INIT_RESERVATION_FORM);
  };

  return (
    <div>
      <h2>Formulario de reserva</h2>
      <input
        onChange={handleInputChange}
        placeholder="Nombre de usuario"
        type="text"
        name="user"
        value={form.user}
      />
      <input
        onChange={handleInputChange}
        placeholder="Email"
        type="email"
        name="email"
        value={form.email}
      />
      <input
        onChange={handleInputChange}
        type="date"
        name="date"
        value={form.date}
      />
      <button onClick={onFormSubmit}>Enviar</button>
      <button onClick={handleReset}>Borrar</button>
      {booked && form !== INIT_RESERVATION_FORM && (
        <div>
          <h3>Reserva enviada con los siguientes datos:</h3>
          <p>Usuario: {form.user}</p>
          <p>Email: {form.email}</p>
          <p>Fecha: {form.date}</p>
        </div>
      )}
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};
