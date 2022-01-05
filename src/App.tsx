import "./App.css";
import "decentraland-ui/lib/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Document from "pages/document";
import { Navbar, Header } from "decentraland-ui";
import ResponsiveMenu from "components/ResponsiveMenu";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          leftMenu={
            <div className="navbar-custom-title">
              <Header>Decentraland technical documentation</Header>
            </div>
          }
          rightMenu={<ResponsiveMenu />}
        />
        <Routes>
          <Route path="/dependencies/:repo/docs/*" element={<Document />} />
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
