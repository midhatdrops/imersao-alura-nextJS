import React from "react";

import db from "../db.json";
// import Widget from "../src/Components/Widget/index";
// import Footer from "../src/Components/Footer/index";
// import GitHubCorner from "../src/Components/GitHubCorner/index";
import QuizBackground from "../src/Components/QuizBackground/index";
import QuizLogo from "../src/Components/QuizLogo/index";
import QuizContainer from "../src/Components/QuizContainer";
// import LoadingWidget from '../src/Components/LoadingWidget'

import QuestionWidget from "../src/Components/QuestionWidget";

export default function QuizzPage() {
  const totalQuestions = db.questions.length;
  const questionIndex = 0;
  const question = db.questions[questionIndex];
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <QuestionWidget
          question={question}
          totalQuestions={totalQuestions}
          questionIndex={questionIndex}
        />
      </QuizContainer>
    </QuizBackground>
  );
}
