import { Section } from "decentraland-ui";
import "./style.css";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function Main({ children }: Props) {
  return <Section className="main-container">{children}</Section>;
}

export default Main;
