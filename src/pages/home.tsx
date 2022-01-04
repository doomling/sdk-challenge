import { Page, Navbar } from "decentraland-ui";
import Sidebar from "components/Sidebar";

export default function Home() {
  return (
    <Page className="flex">
      <Navbar />
      <Sidebar />
    </Page>
  );
}
