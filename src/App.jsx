import "./App.css";
import { AgeCheckForm } from "./components/AgeCheckForm/AgeCheckForm";
import { CharacterCountForm } from "./components/CharacterCountForm/CharacterCountForm";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { FavoriteColorForm } from "./components/FavoriteColorForm/FavoriteColorForm";
import { FeedbackForm } from "./components/FeedbackForm/FeedbackForm";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { NameGreetingForm } from "./components/NameGreetingForm/NameGreetingForm";
import { RatingForm } from "./components/RatingForm/RatingForm";

function App() {
  return (
    <>
      <h1>PRÁCTICA DE FORMULARIOS CONTROLADOS</h1>
      <ContactForm />
      <NameGreetingForm />
      <CharacterCountForm />
      <AgeCheckForm />
      <LoginForm />
      <FavoriteColorForm />
      <FeedbackForm />
      <RatingForm />
    </>
  );
}

export default App;
