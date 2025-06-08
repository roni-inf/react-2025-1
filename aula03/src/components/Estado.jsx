import { useState } from "react";

export default function Estado() {
  //   let valor = 100;
  const [valor, setValor] = useState(1);
  const [nome, setNome] = useState("Antonio");
  const mudarNome = () => {
    setNome((prevNome) => (prevNome === "Antonio" ? "João" : "Antonio"));
  };
  //   function calcular() {
  //     setValor(valor * 2);
  //     console.log(valor);
  //   }
  return (
    <div>
      <h1>Exemplo uso do States</h1>
      <p>Resultado:{valor}</p>
      <button onClick={() => setValor(valor * 2)}>Calcular</button>
      <p>{nome}</p>
      <button onClick={mudarNome}>Trocar nome</button>
    </div>
  );
}
