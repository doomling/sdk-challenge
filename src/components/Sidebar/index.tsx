import { Header } from "decentraland-ui";
import importedDocs from "./../../data/documents.json";
import { Docs } from "types/Docs";
import Tree from "../../components/Tree";
import ParentItem from "components/ParentItem";
import "./style.css";
import { Link } from "react-router-dom";

interface Props {
  responsive?: boolean;
}

const docs: Docs = importedDocs;

const folders = Object.keys(docs).filter((item: string) => {
  return docs[item].parentId === 0;
});

export default function Sidebar({ responsive }: Props) {
  return (
    <aside className={responsive ? "side-menu open" : "side-menu"}>
      <Link to="/">
        <ParentItem
          formattedName={"Home"}
          name="home"
          depth={0}
          noCaret
        ></ParentItem>
      </Link>
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
            key={key}
          />
        );
      })}
    </aside>
  );
}
