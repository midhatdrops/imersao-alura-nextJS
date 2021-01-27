import React from "react";
import db from "../../../db.json";
import QuizBackground from "../QuizBackground";
import QuizContainer from "../QuizContainer";
import QuizLogo from "../QuizLogo";

// eslint-disable-next-line no-unused-vars
function countAnswers() {
  const correctAnswers = localStorage.getItem("CorrectAnswers");
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <div>Você acertou {+correctAnswers} Questões ! parabéns</div>
      </QuizContainer>
    </QuizBackground>
  );
}

export default countAnswers;
