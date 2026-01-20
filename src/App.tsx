import { useEffect, useState } from "react";
import "./App.css";
import BlurIcon from "./components/Svgs/blur";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import { site } from "./site";
import { renderDrip } from "./function";
import Section from "./components/Section";

const App = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  useEffect(() => {
    renderDrip();
  }, []);

  const textMenu = site.menus.find((x) => x.id === "text-nav");
  const iconMenu = site.menus.find((x) => x.id === "icon-nav");
  const maxWidthCSS = "1299px";

  return (
    <>
      <header>
        <div className="bg-(--green)">
          <Nav
            id={textMenu?.id}
            items={textMenu?.items}
            customClassname={`max-md:hidden! max-w-[${maxWidthCSS}] m-auto ${textMenu?.customClass}`}
          />
        </div>
        <div className="w-full m-auto">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className={`min-md:hidden w-full py-3! text-xl! ${showMenu ? "active" : ""}`}
          >
            Menu
          </button>
        </div>
        {showMenu && (
          <Nav
            ariaLive={showMenu ? "polite" : undefined}
            id={textMenu?.id}
            items={textMenu?.items}
            customClassname={`flex flex-col gap-2 py-3 ${textMenu?.customClass}`}
          />
        )}
      </header>

      <main className={`max-w-[${maxWidthCSS}] m-auto p-3`}>
        <div className="grid lg:grid-cols-2 my-20 md:my-40 gap-3 md:gap-8">
          <div className="m-auto w-full">
            <h1>{site.name}</h1>
            <h2 className="w-full!">{site.tagline}</h2>
          </div>
          <div className="m-auto">{site.description}</div>
        </div>
        <Section>
          <Portfolio />
        </Section>
      </main>

      <footer className="mb-[-48px] mt-[60px]">
        <h3 className="h2 w-full! mb-0! flex justify-center">Learn More</h3>

        <div className="bg-(--green)">
          <Nav
            id={iconMenu?.id}
            items={iconMenu?.items}
            customClassname={`max-w-[${maxWidthCSS}] m-auto ${iconMenu?.customClass}`}
          />
        </div>
      </footer>
      <BlurIcon />
    </>
  );
};

export default App;
