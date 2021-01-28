import React from "react";

import db from "../db.json";
import QuizBackground from "../src/Components/QuizBackground/index";
import QuizLogo from "../src/Components/QuizLogo/index";
import QuizContainer from "../src/Components/QuizContainer";
import LoadingWidget from "../src/Components/LoadingWidget";

import QuestionWidget from "../src/Components/QuestionWidget";
import QuizResult from "../src/Components/QuizResult";

const screenStates = {
  LOADING: "LOADING",
  QUIZ: "QUIZ",
  RESULT: "RESULT",
};
export default function QuizzPage() {
  const [result, setResult] = React.useState(0);
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [questionIndex, setQuestionIndex] = React.useState(0);
  const question = db.questions[questionIndex];
  React.useEffect(() => {
    setTimeout(() => setScreenState(screenStates.QUIZ), 1 * 4000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <>
      {screenState === screenStates.LOADING && <LoadingWidget />}
      {screenState === screenStates.QUIZ && (
        <QuizBackground backgroundImage={db.bg}>
          <QuizContainer>
            <QuizLogo />
            <QuestionWidget
              question={question}
              totalQuestions={totalQuestions}
              questionIndex={questionIndex}
              onSubmit={handleSubmitQuiz}
              resultHandler={setResult}
              result={result}
            />
          </QuizContainer>
        </QuizBackground>
      )}
      {screenState === screenStates.RESULT && <QuizResult result={result} />}
    </>
  );
}
