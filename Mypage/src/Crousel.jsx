import { React, useState } from "react";
import "./Crousel.css";

function Crousel() {
  const [hover, setHover] = useState(false);
  const backgroundColor = document.getElementsByClassName("bg-img");

  return (
    <>
      <div
        className="bg-img"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      ></div>
      <div
        className={`crousel ${hover ? "hover" : ""}`}
        style={{
          backgroundColor: hover ? "rgba(0, 0, 0, 0.8)" : "transparent",
        }}
      ></div>
    </>
  );
}

export default Crousel;
