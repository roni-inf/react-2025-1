export default function Aluno({ nome, email, telefone, matriculado }) {
  return (
    <div>
      <p>Nome:{nome}</p>
      <p>Email:{email}</p>
      <p>Telefone:{telefone}</p>
      <p>O aluno está matriculado?{matriculado ? "Sim" : "Não"} </p>
    </div>
  );
}
