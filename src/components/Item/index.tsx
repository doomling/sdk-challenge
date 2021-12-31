import { useEffect, useState } from "react";
import { Doc } from "types/Doc";
import { Docs } from "../../types/Docs";

interface Props {
  isDirectory: boolean;
  name: string;
  path?: string;
  children: number[];
  depth: number;
  items: Docs;
}
function Item({ isDirectory, name, path, children, items, depth }: Props) {
  function getItem(id: number) {
    return items[id];
  }

  return (
    <>
      <li style={{ paddingLeft: `${20 * depth}px` }}>{name}</li>
      {children.length > 0 &&
        children.map((child, key) => {
          const { isDirectory, name, path, children }: Doc = getItem(child);
          return (
            <Item
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
    </>
  );
}

export default Item;
