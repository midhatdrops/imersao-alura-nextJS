import React, { useState } from "react";
import Widget from "../Widget/index";
import Button from "../Button";

function QuestionWidget({ question, totalQuestions, questionIndex, onSubmit }) {
  const questionId = `question__${questionIndex}`;
  const [selected, setSelected] = useState();

  function checkAnswer() {
    const answer = document.querySelector(`label[for=${selected}]`);
    if (
      answer.textContent === "Charmander" ||
      answer.textContent === "Raichu" ||
      answer.textContent === "Dratini" ||
      answer.textContent === "Gyrados"
    ) {
      answer.style.backgroundColor = "green";
      const store = localStorage.getItem("CorrectAnswers");
      localStorage.setItem("CorrectAnswers", +store + 1);
    } else {
      answer.style.backgroundColor = "red";
    }
    setTimeout(() => {
      answer.style.backgroundColor = "#f6685e";
    }, 1 * 1000);
  }

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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              checkAnswer();
              setTimeout(() => onSubmit(), 1 * 2000);
              setSelected("");
            }}
          >
            {question.alternatives.map((alternative, alternativeIndex) => {
              const alternativeID = `alternative__${alternativeIndex}`;
              return (
                <Widget.Topic
                  as="label"
                  htmlFor={alternativeID}
                  style={{
                    border: selected === alternativeID ? "1px solid black" : "",
                  }}
                  key={alternativeID}
                >
                  {alternative}
                  <input
                    id={alternativeID}
                    type="radio"
                    name={questionId}
                    style={{
                      display: "none",
                    }}
                    value={alternativeID}
                    onClick={(e) => setSelected(e.target.value)}
                  />
                </Widget.Topic>
              );
            })}
            <Button type="submit" disabled={!selected}>
              Verificar
            </Button>
          </form>
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
