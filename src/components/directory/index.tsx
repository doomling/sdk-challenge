import { useEffect, useState } from "react";
import "./style.css";
import caret from "./caret.png";

interface Props {
  name: string;
  path?: string;
  children: JSX.Element[] | false;
  depth: number;
}

function Directory({ name, depth, children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{ paddingLeft: `${20 * depth}px` }}
      className="directory-container"
    >
      <div className="item-name" onClick={(e) => setOpen(!open)}>
        {name}
        <img src={caret} className={open ? "caret open" : "caret"} />
      </div>
      <div className={open ? "children-wrapper" : "children-wrapper-collapsed"}>
        {children}
      </div>
    </div>
  );
}

export default Directory;
