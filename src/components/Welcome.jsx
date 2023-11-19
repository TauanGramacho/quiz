import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import Quiz from '../img/quiz.svg';
import './Welcome.css';

const Welcome = () => {
  return (
    <div id="welcome">
      <h2 className="welcome-heading">Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button>Iniciar</button>
      <img src={Quiz} alt="Início do Quiz" />
    </div>
  );
};

export default Welcome;
