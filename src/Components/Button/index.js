import styled from "styled-components";

const button = styled.button`
  padding: 10px;
  border-radius: 10px 10px 10px 10px;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  border: 1px solid ${({ theme }) => theme.colors.primary.light};
  color: whitesmoke;
  opacity: 1;
  transition: 0.8s;
  cursor: pointer;
  &:hover {
    background-color: black;
    opacity: 0.8;
  }
`;

export default button;
