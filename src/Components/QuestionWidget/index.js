import React from "react";
import Widget from "../Widget/index";

function QuestionWidget({ question, totalQuestions, questionIndex }) {
  return (
    <>
      {/* <BackLinkArrow href="/" /> */}
      <Widget>
        <Widget.Header>
          <h3>
            Pergunta {questionIndex + 1} de {`${totalQuestions}`}
          </h3>
        </Widget.Header>

        <img
          alt="Descrição"
          style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
          }}
          src={question.image}
        />
        <Widget.Content>
          <h3>{`${question.title}`}</h3>
          <small>{`${question.description}`}</small>
        </Widget.Content>
      </Widget>

      <Widget>
        <Widget.Header>
          <h1>Quizes da Galera</h1>
        </Widget.Header>
        <Widget.Content>
          <p>lorem ipsum dolor sit amet...</p>
        </Widget.Content>
      </Widget>
    </>
  );
}

export default QuestionWidget;
