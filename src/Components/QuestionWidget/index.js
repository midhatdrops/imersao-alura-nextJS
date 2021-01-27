import React, { useState } from "react";
import Widget from "../Widget/index";
import Button from "../Button";

function QuestionWidget({ question, totalQuestions, questionIndex, onSubmit }) {
  const questionId = `question__${questionIndex}`;
  const [select, setSelect] = useState(false);

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
              onSubmit();
            }}
          >
            {question.alternatives.map((alternative, alternativeIndex) => {
              const alternativeID = `alternative__${alternativeIndex}`;
              return (
                <Widget.Topic
                  as="label"
                  htmlFor={alternativeID}
                  style={{ border: select ? "1px solid black" : "" }}
                >
                  <input
                    id={alternativeID}
                    type="radio"
                    name={questionId}
                    style={{
                      display: "none",
                    }}
                    onClick={() => setSelect(true)}
                  />
                  {alternative}
                </Widget.Topic>
              );
            })}
            <Button type="submit">Verificar</Button>
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
