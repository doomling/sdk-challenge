import { Page, Navbar, Section } from "decentraland-ui";
import MarkdownRender from "components/MarkdownRender";
import Sidebar from "components/Sidebar";
import Main from "components/Main";

export default function Document() {
  return (
    <Page>
      <Navbar />
      <Section className="flex">
        <Sidebar />
        <Main>
          <MarkdownRender />
        </Main>
      </Section>
    </Page>
  );
}
