/* eslint-disable no-console */
/* eslint-disable react/jsx-no-bind */
import styled from "styled-components";
import React, { useState } from "react";
import { useRouter } from "next/router";

import Input from "../Input/index";
import Button from "../Button/index";

const Base = styled.form`
  background-color: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

// eslint-disable-next-line no-unused-vars
export default function Form(props) {
  const [name, setName] = useState("");
  const router = useRouter();
  return (
    <>
      <Base
        onSubmit={function (e) {
          console.log("Redirecionando...");
          e.preventDefault();
          return router.push(`/quiz?name=${name}`);
        }}
      >
        <Input
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
        />
        <Button type="submit" disabled={name.length === 0}>
          Enviar
        </Button>
      </Base>
    </>
  );
}
