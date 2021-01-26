import styled from "styled-components";

const input = styled.input`
  padding: 6px 8px 6px 8px;
  border-radius: 5px 5px 5px 5px;
  background-color: black;
  border: 1px solid ${({ theme }) => theme.colors.primary.light};
  color: whitesmoke;
  margin-bottom: 10px;
`;

export default input;
