import { useState } from "react";

const Styleguide = () => {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h1>Style Guide</h1>
      <div className="flex flex-col md:flex-row justify-around">
        <div>
          <div>
            <h2>Typography</h2>
          </div>
          <div className="">
            <div className="h1">Headline h1</div>
            <div className="h2">Headline h2</div>
            <div className="h3">Headline h3</div>
            <div className="h4">Headline h4</div>
            <div className="h5">h5</div>
            <div className="h6">Headline h6</div>
          </div>
        </div>
        <div>
          <div>
            <h2>Typography --Reference</h2>
          </div>
          <div>
            <div className="h1">Universal Studios</div>
            <div className="h2">Halloween</div>
            <div className="h5">'24</div>
            <div className="h6">こんにちは世界</div>
            <p>
              HORR
              <a href="">O</a>R
            </p>
            <div className="h4">Nights</div>
          </div>
          <img
            className="flex"
            src="./src/assets/images/hhn24.jpg"
            alt="the universal halloween horror nights 2024 green flannel shirt"
          />
        </div>
      </div>
      <div>
        <h3>Extras</h3>
        <div>
          <a href="#">Link</a>
        </div>
        <p>
          Paragraph with a <a href="#">Link</a>.
        </p>
        <button onClick={() => setCount((count) => count + 1)}>
          button click count is {count}
        </button>
      </div>
    </section>
  );
};

export default Styleguide;
