import React from "react";
import { motion } from "framer-motion";
import db from "../../../db.json";
import QuizBackground from "../QuizBackground";
import QuizContainer from "../QuizContainer";
import QuizLogo from "../QuizLogo";
import Widget from "../Widget";

// eslint-disable-next-line no-unused-vars
function countAnswers({ result, dbBg = db.bg }) {
  return (
    <QuizBackground backgroundImage={dbBg}>
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
          transition={{ ease: "easeInOut", duration: 1.3 }}
        >
          <Widget.Header>Resultado</Widget.Header>
          <Widget.Content>
            <h1>Você acertou:</h1>
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
