import React from "react";
import Widget from "../Widget/index";
import QuizBackground from "../QuizBackground";
import QuizContainer from "../QuizContainer";

export default function LoadingWidget() {
  return (
    <QuizBackground backgroundImage="https://media.giphy.com/media/slVWEctHZKvWU/giphy.gif">
      <QuizContainer>
        <Widget>
          <Widget.Header>Loading...</Widget.Header>
          <Widget.Content>
            {/*  eslint-disable-next-line react/jsx-curly-brace-presence */}
            Espere um pouco até arrumarmos tudo por aqui :) !
          </Widget.Content>
        </Widget>
      </QuizContainer>
    </QuizBackground>
  );
}
