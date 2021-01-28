import React from "react";
import db from "../../../db.json";
import QuizBackground from "../QuizBackground";
import QuizContainer from "../QuizContainer";
import QuizLogo from "../QuizLogo";
import Widget from "../Widget";

// eslint-disable-next-line no-unused-vars
function countAnswers({ result }) {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>Resultado</Widget.Header>
          <Widget.Content>
            Você acertou:
            <br />
            <Widget.Topic style={{ textAlign: "center" }}>
              {result}
            </Widget.Topic>
            {+result === 1 ? "Questão! Parabéns" : "Questões! Parabéns!"}
          </Widget.Content>
        </Widget>
      </QuizContainer>
    </QuizBackground>
  );
}

export default countAnswers;
