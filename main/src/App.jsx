import { useEffect, useRef, useState } from "react";
import "@hackernoon/pixel-icon-library/fonts/iconfont.css";
import { toast } from "react-hot-toast";
import { lazyCheck } from "./helpers";

const examplePhrases = [
  "Cuphead",
  "Root Pack",
  "Katana A17",
  "RybsonBybson",
  "Grand Theft Auto V",
  "Grand Theft Auto: San Andreas",
];

function App() {
  const lbl = useRef(null);
  const [inp, setInp] = useState("");

  const randomPhrase = () => {
    if (!lbl.current) return;

    const phrase =
      examplePhrases[Math.round(Math.random() * (examplePhrases.length - 1))];
    lbl.current.innerText = phrase;
  };

  const check = () => {
    if (!lbl.current) return;
    const isEqual = lazyCheck(inp, lbl.current?.innerText);
    if (isEqual) toast.success("Dobrze!");
    else toast.error("Błąd!");
    randomPhrase();
  };

  useEffect(() => {
    randomPhrase();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row text-center justify-content-center">Write a:</div>
        <div className="row text-center justify-content-center">
          <h2 ref={lbl}></h2>
        </div>
        <div className="row m-3 justify-content-center">
          <div className="col-4">
            <input
              type="text"
              onChange={(e) => setInp(e.target.value)}
              placeholder="Your input"
              className="form-control"
            />
          </div>

          <div className="col-2">
            <button
              className="btn btn-primary p-2 px-4"
              onClick={() => check()}
            >
              Submit <i className="hn hn-startups"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
