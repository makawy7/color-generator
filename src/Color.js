function Color({ colorList }) {
  return (
    <>
      {colorList.map((color, idx) => (
        <article
          key={idx}
          className={`color false ${idx > 9 ? "color-light" : ""}`}
          style={{ backgroundColor: `rgb(${color.rgb.toString()})` }}
        >
          <p className="percent-value">{color.weight}%</p>
          <p className="color-value">#{color.hex}</p>
        </article>
      ))}
    </>
  );
}

export default Color;
