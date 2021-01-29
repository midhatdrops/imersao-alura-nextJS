/* eslint-disable no-console */
import React from "react";
import QuizPage from "./index";

export default function QuizDaGaleraPage({ dbExterno }) {
  return <QuizPage db={dbExterno} />;
}

// eslint-disable-next-line no-unused-vars
export async function getServerSideProps(context) {
  const dbExterno = await fetch(
    "https://aluraquiz-base.alura-challenges.vercel.app/api/db"
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
