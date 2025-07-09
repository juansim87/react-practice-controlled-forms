import "./App.css";
import { CharacterCountForm } from "./components/CharacterCountForm/CharacterCountForm";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { NameGreetingForm } from "./components/NameGreetingForm/NameGreetingForm";

function App() {
	return (
		<>
			<h1>PRÁCTICA DE FORMULARIOS CONTROLADOS</h1>
			<ContactForm />
			<NameGreetingForm />
      <CharacterCountForm/>
		</>
	);
}

export default App;
