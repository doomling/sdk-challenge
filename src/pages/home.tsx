import { Page, Navbar, Header } from "decentraland-ui";
import importedDocs from "./../data/test.json";
import { Docs } from "types/Docs";
import Item from "./../components/Item";

const docs: Docs = importedDocs;

const folders = Object.keys(docs).filter((item: string) => {
  return docs[item].parentId === 0;
});

console.log(folders);

export default function Home() {
  return (
    <Page>
      <Navbar />
      <Header>Table of contents</Header>
      {folders.map((folder, key) => {
        console.log(docs[folder]);
        const { isDirectory, name, path, children } = docs[folder];
        return (
          <Item
            isDirectory={isDirectory}
            name={name}
            path={path}
            children={children}
            items={docs}
            depth={0}
          />
        );
      })}
    </Page>
  );
}
