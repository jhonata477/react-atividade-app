
function Lista(props) {
  return (
    <div>
      <h2>O que estou aprendendo</h2>

      <ul>
        {props.itens.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Lista;
