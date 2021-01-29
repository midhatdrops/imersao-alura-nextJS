import React from "react";
import db from "../db.json";
import Widget from "../src/Components/Widget/index";
import Footer from "../src/Components/Footer/index";
import GitHubCorner from "../src/Components/GitHubCorner/index";
import QuizBackground from "../src/Components/QuizBackground/index";
import QuizLogo from "../src/Components/QuizLogo/index";
import QuizContainer from "../src/Components/QuizContainer";
import Link from "../src/Components/Link";

import Form from "../src/Components/Form/index";

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <Form />
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Quizes da Galera</h1>
          </Widget.Header>
          <Widget.Content>
            <ul>
              {db.external.map((e) => {
                const [projectName, gitHubUser] = e
                  .replace(/\//g, "")
                  .replace("https:", "")
                  .replace(".vercel.app", "")
                  .split(".");

                return (
                  <li key={e}>
                    <Widget.Topic
                      href={`/quiz/${projectName}___${gitHubUser}`}
                      as={Link}
                    >
                      {`${gitHubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/midhatdrops/imersao-alura-nextJS" />
    </QuizBackground>
  );
}
