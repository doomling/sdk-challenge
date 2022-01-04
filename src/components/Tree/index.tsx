import { Doc } from "types/Doc";
import { Docs } from "../../types/Docs";
import Directory from "components/directory";
import { Link, useParams } from "react-router-dom";
import "./style.css";
import { useState } from "react";

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
    return getFileName() == name;
  }

  function getFileName() {
    const pathArr: string[] | undefined = params["*"]?.split("/");
    return pathArr && pathArr[pathArr.length - 1];
  }

  function getItem(id: number) {
    return items[id];
  }

  function nameFormatter(name: string) {
    return name.replace(new RegExp("-", "g"), " ").replace(".md", "");
  }

  return (
    <>
      {isDirectory ? (
        name != "images" && (
          <Directory
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
          </Directory>
        )
      ) : (
        <div style={{ paddingLeft: `${10 * depth}px` }}>
          <Link className={isActive ? "active link" : "link"} to={`/${path}`}>
            {nameFormatter(name)}
          </Link>
        </div>
      )}
    </>
  );
}

export default Tree;
