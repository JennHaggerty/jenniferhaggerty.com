import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import StyleguideExample from "./components/Styleguide/StyleguideExample";
import { site } from "./site";
const App = () => {
  return (
    <>
      <Header>
        <h1>{site.name}</h1>
        <h2>{site.tagline}</h2>
        <Nav
          id={site.menus.find((x) => x.location === "header")?.id}
          items={site.menus.find((x) => x.location === "header")?.items}
        />
      </Header>
      <StyleguideExample />
    </>
  );
};

export default App;
