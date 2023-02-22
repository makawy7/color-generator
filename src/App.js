import Values from "values.js";
import { useState, useRef, useEffect } from "react";
import Color from "./Color";

function App() {
  const colorRef = useRef(null);
  const [colorList, setColorList] = useState([]);
  const [invalidColor, setInvalidColor] = useState(false);

  useEffect(() => {
    const colors = new Values("#f15025").all(10);
    setColorList(colors);
  }, []);

  const generateColors = (e) => {
    e.preventDefault();
    const color = colorRef.current.value;
    try {
      const colors = new Values(color).all(10);
      setColorList(colors);
      setInvalidColor(false);
    } catch (error) {
      setInvalidColor(true);
      console.log("Please enter a valid color");
    }
  };

  console.log(colorList);
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form>
          <input
            type="text"
            placeholder="#f15025"
            ref={colorRef}
            className={`${invalidColor ? "error" : ""}`}
          />
          <button onClick={generateColors} type="submit" className="btn">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        <Color colorList={colorList} />
      </section>
    </>
  );
}

export default App;
