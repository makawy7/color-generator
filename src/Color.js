import { useState, useRef, useEffect } from "react";

function Color({ color, idx }) {
  const { rgb, hex, weight } = color;
  const [copy, setCopy] = useState(false);
  const timerRef = useRef(null);

  timerRef.current = () =>
    setTimeout(() => {
      setCopy(false);
    }, 2000);

  useEffect(() => {
    timerRef.current();
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [copy]);

  const handleCopy = () => {
    setCopy(true);
    navigator.clipboard.writeText(`#${hex}`);
  };

  return (
    <article
      onClick={handleCopy}
      className={`color false ${idx > 9 ? "color-light" : ""}`}
      style={{ backgroundColor: `rgb(${rgb.toString()})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
      {copy && <p className="alert">Copied to clipboard</p>}
    </article>
  );
}

export default Color;
