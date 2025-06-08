import React, { useState } from "react";

export default function Entrada() {
  const [texto, setTexto] = useState("");

  const handleChange = (event) => {
    setTexto(event.target.value);
  };

  return (
    <div>
      <h1>Exemplo de input e state</h1>
      <input
        type="text"
        placeholder="Digite algo"
        onChange={handleChange}
        value={texto}
      />
      <p>Você digitou:{texto}</p>
    </div>
  );
}
