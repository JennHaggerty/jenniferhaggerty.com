import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <section className="styles">
      <div>
        <div>
          <h2>Typography</h2>
        </div>
        <div>
          <h1>Headline h1</h1>
          <h2>Headline h2</h2>
          <h3>Headline h3</h3>
          <h4>Headline h4</h4>
          <h5>Headline h5</h5>
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
      </div>

      <div>
        <div>
          <h2>Typography --Example</h2>
        </div>
        <div>
          <h1>Universal Studios</h1>
          <h2>Halloween</h2>
          <h3>
            Horr<a href="">o</a>r
          </h3>
          <h4>Nights</h4>
          <h5>'24</h5>
          <h6>こんにちは世界</h6>
        </div>
      </div>
    </section>
  );
};

export default App;
