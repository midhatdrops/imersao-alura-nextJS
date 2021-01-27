import React from "react";

import db from "../db.json";
// import Widget from "../src/Components/Widget/index";
// import Footer from "../src/Components/Footer/index";
// import GitHubCorner from "../src/Components/GitHubCorner/index";
import QuizBackground from "../src/Components/QuizBackground/index";
import QuizLogo from "../src/Components/QuizLogo/index";
import QuizContainer from "../src/Components/QuizContainer";
import LoadingWidget from "../src/Components/LoadingWidget";

import QuestionWidget from "../src/Components/QuestionWidget";

const screenStates = {
  LOADING: "LOADING",
  QUIZ: "QUIZ",
  RESULT: "RESULT",
};
export default function QuizzPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [questionIndex, setQuestionIndex] = React.useState(0);
  const question = db.questions[questionIndex];
  React.useEffect(() => {
    setTimeout(() => setScreenState(screenStates.QUIZ), 1 * 2000);
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
            />
          </QuizContainer>
        </QuizBackground>
      )}
      {screenState === screenStates.RESULT && (
        <QuizBackground backgroundImage={db.bg}>
          <QuizContainer>
            <QuizLogo />
            <div>Você acertou X Questões ! parabéns</div>
          </QuizContainer>
        </QuizBackground>
      )}
    </>
  );
}
