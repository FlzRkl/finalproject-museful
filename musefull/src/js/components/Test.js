import react from "react";
import style from "styled-components";

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
