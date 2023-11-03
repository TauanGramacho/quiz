import './Welcome.css';
import Quiz from '../img/quiz.svg'; // Importe o SVG corretamente.

const welcome = () => {
  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button>Iniciar</button>
      <img src={Quiz} alt="Início do Quiz" /> {/* Use as chaves sem aspas para referenciar a variável. */}
    </div>
  );
};

export default welcome;
