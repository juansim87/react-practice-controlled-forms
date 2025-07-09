# 🧪 Ejercicios de React con formularios simples

## 🎯 Objetivo

Practicar el manejo de formularios en React utilizando inputs controlados, capturando eventos como `onChange` y `onClick`, y validando datos introducidos por el usuario.

Puedes reutilizar todo lo que hiciste en el proyecto anterior. Los nuevos componentes se pueden añadir a la misma carpeta `componentes`.

Eso sí, te aviso que en el ejercicio se piden conceptos que no hemos visto en clase, pero puedes buscar información sobre ellos en internet. ¡Ánimo!

Intenta no usar ChatGPT para resolver los ejercicios, ya que es mejor que intentes resolverlos por ti mismo. Si te atascas, puedes buscar ayuda en internet. Si después de buscar en internet no consigues resolverlo, entonces sí puedes preguntar a ChatGPT.

---

## 🚀 Pasos iniciales

### 1. Crear un nuevo repositorio en tu propia cuenta de GitHub
En este repositorio, sube tu código usando Git y mensajes claros en tus commits como viste en la clase de GitHub Avanzado.

### 2. Crear un proyecto React vacío

Usa `Vite` para crearlo:

```bash
npm create vite@latest
# Elige React (con JavaScript)
```

### 3. Limpiar el proyecto

- Borra todo el código de ejemplo que no necesitas (logos, App.css, etc.)
- Deja solo lo esencial: `main.jsx`, `App.jsx` y tu estructura propia

### 4. Realiza el ejercicio
Todo el código, así como el ejercicio, estará en tu propio repositorio de GitHub.

---

## 🧩 Ejercicios

Crea estos 10 componentes para practicar con formularios en React:

0. **ContactForm**
   - Vé al código de la clase y en la carpeta `./pizarra` encontrarás una imagen del formulario de contacto. Crea un componente que incluya los campos que se indican y de la forma en la que se indican.

1. **NameGreetingForm**
   - Crea un input de texto y un botón. Al pulsar intro, muestra un mensaje “Hola [nombre]”.

2. **CharacterCountForm**
   - Un input de texto que muestre en pantalla cuántos caracteres lleva escritos el usuario en tiempo real.

3. **AgeCheckForm**
   - Un input para escribir la edad. Al pulsar el botón, muestra si eres mayor o menor de edad.

4. **LoginForm**
   - Dos inputs: usuario y contraseña. Crea un array de objetos de un listado de usuarios ficticio (a modo de base de datos) Al hacer click en el botón, deberás buscar en tu array de usuarios si el usuario y la contraseña coincide con alguno del listado. En ese caso, muestra un mensaje de bienvenida. En caso contrario, muestra un mensaje de error.

5. **FavoriteColorForm**
   - Un `select` con varios colores. Al pulsar el botón, muestra un mensaje como “Tu color favorito es [color]”.

6. **FeedbackForm**
   - Un input para el nombre y un `textarea` para dejar un comentario. Al pulsar “Enviar”, se muestra un resumen de lo introducido antes de enviar el formulario y un botón. Si se pulsa el botón, entonces es cuando se envía el formulario y se muestra un mensaje de éxito.

7. **RatingForm**
   - Muestra botones con valores del 1 al 5 para puntuar un producto. Al seleccionar una puntuación, se muestra debajo el número elegido.

8. **BookingForm**
   - Inputs para nombre, correo y fecha. Al pulsar el botón, valida que no haya campos vacíos y muestra los datos ingresados. Es para una reserva de hotel.

9. **CurrencyConverterForm**
   - Input para cantidad en euros y `select` para divisa (USD, GBP...). Al pulsar el botón, convierte el valor (usa tasas fijas). Para ello, crea un objeto con las tasas de conversión y muestra el resultado.
   - Por ejemplo, si el usuario introduce 100 euros y selecciona USD, muestra “100 euros son 110 dólares” (suponiendo una tasa de conversión de 1.1).

10. **Bonus: RegisterUserForm** 
   - Inputs: nombre completo, correo electrónico y contraseña. Valida que los tres campos estén rellenos antes de mostrar un mensaje de éxito. Además, deberás guardar los datos del usuario en el mismo objeto que usaste en el LoginForm. Seguramente, tengas que mover el array de usuarios al componente `App.jsx` para que sea accesible desde ambos componentes y pasarlo como prop. A `<LoginForm />` le pasarás el array de usuarios y a `<RegisterUserForm />` le pasarás una función para añadir un nuevo usuario al array (setUsers).

---

## ✅ Requisitos

- Todos los componentes deben funcionar de forma independiente.
- Tu código tiene que estar escrito en inglés.
- Todos deben usar inputs controlados.
- Cada componente debe tener estilos simples pero bien organizados.
- Añade ejemplos de todos los componentes en `App.jsx`.