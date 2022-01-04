import { useEffect, useState } from "react";
import "./style.css";
import caret from "./caret.png";
import { useParams } from "react-router";

interface Props {
  name: string;
  formattedName: string;
  path?: string;
  children: JSX.Element[] | false;
  depth: number;
}

function Directory({ name, depth, children, formattedName }: Props) {
  const params = useParams();
  const [open, setOpen] = useState(isInPath());

  function isInPath() {
    const pathArr: string[] | undefined = params["*"]?.split("/");
    return pathArr?.includes(name) || name == params.repo || name == "docs";
  }

  return (
    <div
      style={{ paddingLeft: `${10 * depth}px` }}
      className="directory-container"
    >
      <div
        className="item-name"
        onClick={() => setOpen((prevState) => !prevState)}
      >
        {formattedName}
        <img src={caret} className={open ? "caret open" : "caret"} />
      </div>
      <div className={open ? "children-wrapper" : "children-wrapper collapsed"}>
        {children}
      </div>
    </div>
  );
}

export default Directory;
