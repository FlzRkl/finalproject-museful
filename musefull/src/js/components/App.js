import React from "react";
import List from "./List";
import Form from "./Form";

import styled from "styled-components";

const MySCButton = styled.button`
  background: ${(props) => (props.primary ? props.mainColor : "white")};
  color: ${(props) => (props.primary ? "white" : props.mainColor)};
  display: block;
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border: 2px solid ${(props) => props.mainColor};
  border-radius: 15px;
`;
const App = () => (
  <>
    <div>
      <h2> Articles </h2>
      <MySCButton mainColor='#ee6352' primary>
        My 1st Button
      </MySCButton>
      <List />
    </div>
    <div>
      <h2>Add a new article</h2>
      <Form />
    </div>
    <div></div>
  </>
);

export default App;
