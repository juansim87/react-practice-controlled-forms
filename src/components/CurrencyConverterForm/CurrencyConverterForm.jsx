import { useState } from "react";
import "./CurrencyConverterForm.css";

const currencies = {
  usd: 1.09,
  gbp: 0.85,
  jpy: 158.32,
  cny: 7.91,
};

export const CurrencyConverterForm = () => {
  const [quantity, setQuantity] = useState(0);
  const [actualCurrency, setActualCurrency] = useState("");
  const [conversionValue, setConversionValue] = useState(0);
  const [error, setError] = useState("");

  const currencyToConvert = (event) => {
    setActualCurrency(event.target.value);
    setConversionValue(0);
  };

  const quantityToConvert = (event) => {
    setQuantity(event.target.value);
    setConversionValue(0);
  };

  const calculateConversion = () => {
    if (quantity < 0) {
      setError("Introduce una cantidad positiva");
      return;
    }

    if (!actualCurrency) {
      setError("Selecciona una divisa");
      return;
    }

    const result = Number(quantity) * currencies[actualCurrency];

    setConversionValue(result);
    setError("");
    console.log(result);
  };

  return (
    <div>
      <h2>Conversor de divisa</h2>
      <input type="number" name="quantity" onChange={quantityToConvert} />
      <select onChange={currencyToConvert}>
        <option value="">Selecciona una divisa</option>
        <option value={"usd"}>USD</option>
        <option value={"gbp"}>GBP</option>
        <option value={"jpy"}>JPY</option>
        <option value={"cny"}>CNY</option>
      </select>
      <button
        onClick={calculateConversion}
        disabled={quantity <= 0 || !actualCurrency}
      >
        Calcular
      </button>
      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}

      {conversionValue > 0 && !error && (
        <div>
          <p>
            {Number(quantity).toFixed(2)} € son {conversionValue.toFixed(2)}{" "}
            {actualCurrency.toUpperCase()}
          </p>
        </div>
      )}
    </div>
  );
};
