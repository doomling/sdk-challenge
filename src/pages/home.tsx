import { Page, Section, Header } from "decentraland-ui";
import Sidebar from "components/Sidebar";
import Main from "components/Main";

export default function Home() {
  return (
    <Page>
      <Section className="flex">
        <Sidebar />
        <Main>
          <Header size="large">Decentraland documentation</Header>
          <Header sub>
            Find documentation on Decentraland various repositories
          </Header>
        </Main>
      </Section>
    </Page>
  );
}
