import { Header } from "decentraland-ui";
import importedDocs from "./../../data/documents.json";
import { Docs } from "types/Docs";
import Tree from "../../components/Tree";
import "./style.css";

const docs: Docs = importedDocs;

const folders = Object.keys(docs).filter((item: string) => {
  return docs[item].parentId === 0;
});

export default function Sidebar() {
  return (
    <aside>
      <Header>Table of contents</Header>
      {folders.map((folder, key) => {
        const { isDirectory, name, path, children } = docs[folder];
        return (
          <Tree
            isDirectory={isDirectory}
            name={name}
            path={path}
            children={children}
            items={docs}
            depth={0}
          />
        );
      })}
    </aside>
  );
}
