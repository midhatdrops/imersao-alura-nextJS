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
  const questionIndex = 0;
  const question = db.questions[questionIndex];
  React.useEffect(() => {
    setTimeout(() => setScreenState(screenStates.QUIZ), 1 * 2000);
  }, []);
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            totalQuestions={totalQuestions}
            questionIndex={questionIndex}
          />
        )}
        {screenState === screenStates.LOADING && <LoadingWidget />}
        {screenState === screenStates.RESULT && (
          <div> Você acertou X questões ! Parabéns!</div>
        )}
      </QuizContainer>
    </QuizBackground>
  );
}
