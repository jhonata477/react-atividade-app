import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Lista from "./components/Lista";

function App() {
  const assuntos = [
    "JavaScript",
    "React",
    "Componentes",
    "Props",
    "JSX"
  ];

  return (
    <>
      <Header />

      <main>
        <Card
          titulo="React"
          descricao="Estou aprendendo a criar aplicações com React."
        />

        <Card
          titulo="Vite"
          descricao="Estou utilizando Vite para criar meu projeto."
        />

        <Lista itens={assuntos} />
      </main>

      <Footer />
    </>
  );
}

export default App;
