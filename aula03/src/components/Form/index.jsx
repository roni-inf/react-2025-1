import { useState } from "react";
import "./style.css";
export default function Form() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setImc((peso / altura ** 2).toFixed(2));
  };

  return (
    <div>
      <form className="formulario" onSubmit={handleSubmit}>
        <label htmlFor="peso">Peso:</label>
        <input
          type="number"
          name="peso"
          id="peso"
          required
          value={peso}
          onChange={(e) => {
            setPeso(e.target.value);
          }}
        />

        <label htmlFor="altura">Altura:</label>
        <input
          type="number"
          name="altura"
          id="altura"
          required
          value={altura}
          onChange={(e) => {
            setAltura(e.target.value);
          }}
        />
        {peso && altura ? <label>Resultado: {imc}</label> : ""}
        <button className="botao">Calcular</button>
      </form>
    </div>
  );
}
