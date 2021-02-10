import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 1440px;
  margin-left: auto;
  margin-right: auto;
  background: red;
`;

type Props = {
  children: React.ReactElement | Element;
};
const MainBody: React.FC<Props> = ({ children }) => {
  return <Div>{children}</Div>;
};

export default MainBody;
