import React, { useState } from "react";
import Widget from "../Widget/index";
import Button from "../Button";
import BackLinkArrow from "../BackLinkArrow";

function QuestionWidget({
  question,
  totalQuestions,
  questionIndex,
  onSubmit,
  resultHandler,
  result,
}) {
  const questionId = `question__${questionIndex}`;
  const [selected, setSelected] = useState(null);
  const isCorrect = selected === question.answer;

  function checkAnswer() {
    const resp = document.querySelector(`label[for=alternative__${selected}]`);
    if (isCorrect === true) {
      resp.style.backgroundColor = "green";
      resultHandler(result + 1);
    } else {
      resp.style.backgroundColor = "red";
    }
    setTimeout(() => {
      resp.style.backgroundColor = "#f6685e";
    }, 1 * 1000);
  }

  return (
    <>
      <Widget>
        <Widget.Header>
          <BackLinkArrow href="/" />
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
              setSelected(null);
              setTimeout(() => onSubmit(), 1 * 2000);
            }}
          >
            {question.alternatives.map((alternative, alternativeIndex) => {
              const alternativeID = `alternative__${alternativeIndex}`;
              return (
                <Widget.Topic
                  as="label"
                  htmlFor={alternativeID}
                  style={{
                    border:
                      selected === alternativeIndex ? "1px solid black" : "",
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
                    onChange={() => setSelected(alternativeIndex)}
                  />
                </Widget.Topic>
              );
            })}
            <Button type="submit" disabled={selected === null}>
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
