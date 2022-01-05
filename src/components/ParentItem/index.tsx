import { useState } from "react";
import "./style.css";
import caret from "./caret.png";
import { useParams } from "react-router";

interface Props {
  name: string;
  formattedName: string;
  path?: string;
  children?: JSX.Element | JSX.Element[] | false;
  depth: number;
  noCaret?: boolean;
}

function ParentItem({ name, depth, children, formattedName, noCaret }: Props) {
  const params = useParams();
  const [open, setOpen] = useState(isInPath());

  /**
   * @notice checks if current name is part of the href route
   */

  function isInPath() {
    const pathArr: string[] | undefined = params["*"]?.split("/");
    return pathArr?.includes(name) || name === params.repo || name === "docs";
  }

  return (
    <div
      style={{ paddingLeft: `${10 * depth}px` }}
      className="directory-container"
    >
      <div
        className="tree-item-name"
        onClick={() => setOpen((prevState) => !prevState)}
      >
        {formattedName}
        {!noCaret && (
          <img
            src={caret}
            className={open ? "caret open" : "caret"}
            alt="toggle menu"
          />
        )}
      </div>
      <div
        className={open ? "tree-children-wrapper" : "tree-children-collapsed"}
      >
        {children}
      </div>
    </div>
  );
}

export default ParentItem;
