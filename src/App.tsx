import { useEffect } from "react";
import "./App.css";
import BlurIcon from "./assets/svgs/blur";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Portfolio from "./components/Portfolio/Portfolio";
import { site } from "./site";
import { renderDrip } from "./function";
import Footer from "./components/Footer/Footer";

const App = () => {
  useEffect(() => {
    renderDrip();
  }, []);

  return (
    <main>
      <Header>
        <div>
          <h1>{site.name}</h1>
          <h2>{site.tagline}</h2>
          <h3 className="h4">Augusta, GA</h3>
        </div>
        <p>{site.description}</p>
        <Nav
          id={site.menus.find((x) => x.location === "header")?.id}
          items={site.menus.find((x) => x.location === "header")?.items}
        />
      </Header>
      <Portfolio />
      <BlurIcon />
    </main>
  );
};

export default App;
