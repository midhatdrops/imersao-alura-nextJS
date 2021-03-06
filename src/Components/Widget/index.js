import styled from "styled-components";

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid
    ${({ theme }) => theme.colors.primary.main || theme.colors.secondary};
  background-color: ${({ theme }) =>
    theme.colors.primary.dark || theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;
  h1,
  h2,
  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
    color: ${({ theme }) =>
      `${theme.colors.contrastText.dark || theme.colors.contrastText}`};
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    color: whitesmoke;
  }
  small {
    color: ${({ theme }) =>
      `${theme.colors.contrastText.main || theme.colors.contrastText}`};
  }
`;

Widget.Content = styled.div`
  color: ${({ theme }) =>
    `${theme.colors.contrastText.main || theme.colors.contrastText}`};
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Header = styled.header`
  display: flex;
  color: ${({ theme }) => `${theme.colors.contrastText || "whitesmoke"}`};
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) =>
    theme.colors.primary.main || theme.colors.primary};

  * {
    margin: 0;
  }
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) =>
    `${theme.colors.contrastText.dark || theme.colors.contrastText}`};
  background-color: ${({ theme }) =>
    `${theme.colors.primary.light || theme.colors.secondary}`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: 0.3s;
  display: block;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

export default Widget;
