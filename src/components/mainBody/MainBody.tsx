import React from "react";
import styled from "styled-components";

const Div = styled.div`
  margin-left: auto;
  margin-right: auto;
  background: rgba(200, 200, 200, 0.3);
`;

type Props = {
  children?: React.ReactElement | Element;
};
const MainBody: React.FC<Props> = ({ children }) => {
  return <Div>{children}</Div>;
};

export default MainBody;
