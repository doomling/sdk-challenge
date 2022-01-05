import { Doc } from "types/Doc";
import { Docs } from "../../types/Docs";
import ParentItem from "components/ParentItem";
import { Link, useParams } from "react-router-dom";
import "./style.css";

interface Props {
  isDirectory: boolean;
  name: string;
  path?: string;
  children: number[];
  depth: number;
  items: Docs;
}

function Tree({ isDirectory, name, path, children, items, depth }: Props) {
  const params = useParams();
  const isActive = getIsActive();

  function getIsActive() {
    return getFileName() === removeExtension(name);
  }

  /**
   * @notice get current filename from url path
   */
  function getFileName() {
    const pathArr: string[] | undefined = params["*"]?.split("/");
    return pathArr && pathArr[pathArr.length - 1];
  }

  /**
   * @notice get item information
   * @params id of the item to retrieve
   */
  function getItem(id: number) {
    return items[id];
  }

  /**
   * @notice removes extension to use as path
   * @params name raw string to format
   */
  // TO-DO: move to utils, handle any extension

  function removeExtension(name: string) {
    return name.replace(".md", "");
  }

  /**
   * @notice Formats name in readable human form
   * @params name raw string to format
   */
  function nameFormatter(name: string) {
    return removeExtension(name.replace(new RegExp("-", "g"), " "));
  }

  return (
    <>
      {isDirectory ? (
        name !== "images" && (
          <ParentItem
            formattedName={nameFormatter(name)}
            name={name}
            depth={depth}
          >
            {children.length > 0 &&
              children.map((child, key) => {
                const { isDirectory, name, path, children }: Doc =
                  getItem(child);
                return (
                  <Tree
                    key={key}
                    isDirectory={isDirectory}
                    name={name}
                    path={path}
                    children={children}
                    items={items}
                    depth={depth + 1}
                  />
                );
              })}
          </ParentItem>
        )
      ) : (
        <div style={{ paddingLeft: `${10 * depth}px` }}>
          <Link
            className={isActive ? "active link" : "link"}
            to={`/${removeExtension(path!)}`}
          >
            {nameFormatter(name)}
          </Link>
        </div>
      )}
    </>
  );
}

export default Tree;
