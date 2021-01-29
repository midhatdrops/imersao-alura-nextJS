/* eslint-disable no-console */
import React from "react";
import { ThemeProvider } from "styled-components";
import QuizPage from "./index";

export default function QuizDaGaleraPage({ dbExterno }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizPage db={dbExterno} />
    </ThemeProvider>
  );
}

// eslint-disable-next-line no-unused-vars
export async function getServerSideProps(context) {
  const [projectName, gitHubUser] = context.query.id.split("___");
  const dbExterno = await fetch(
    `https://${projectName}.${gitHubUser}.vercel.app/api/db`
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Falha em pegar os dados");
    })
    .then((res) => res)
    .catch((err) => console.log(err));

  return {
    props: { dbExterno }, // will be passed to the page component as props
  };
}
