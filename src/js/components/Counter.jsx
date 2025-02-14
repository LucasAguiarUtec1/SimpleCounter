import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Counter = () => {
  const [secods, setSeconds] = useState(0);

  const [formatedSeconds, setFormatedSeconds] = useState(["0", "0", "0", "0"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => (seconds + 1) % 10000);
    }, 1000);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    const digits = String(secods).padStart(4, "0").split("");
    setFormatedSeconds(digits);
  }, [secods]);

  return (
    <div
      style={{
        width: "100%",
        height: "25vh",
        backgroundColor: "black",
      }}
      className="d-flex justify-content-center align-items-center"
    >
      <div
        className="d-flex justify-content-center align-items-center m-1"
        style={{ width: "76px", height: "76px", backgroundColor: "#322c2c" }}
      >
        <FontAwesomeIcon
          icon={faClock}
          style={{ color: "#ffffff", width: "60%", height: "60%" }}
        />
      </div>
      <div
        style={{
          height: "76px",
          width: "76px",
          backgroundColor: "#322c2c",
        }}
        className="d-flex justify-content-center align-items-center fs-1 text-white m-1"
      >
        {formatedSeconds[0]}
      </div>
      <div
        style={{
          height: "76px",
          width: "76px",
          backgroundColor: "#322c2c",
        }}
        className="d-flex justify-content-center align-items-center fs-1 text-white m-1"
      >
        {formatedSeconds[1]}
      </div>
      <div
        style={{
          height: "76px",
          width: "76px",
          backgroundColor: "#322c2c",
        }}
        className="d-flex justify-content-center align-items-center fs-1 text-white m-1"
      >
        {formatedSeconds[2]}
      </div>
      <div
        style={{
          height: "76px",
          width: "76px",
          backgroundColor: "#322c2c",
        }}
        className="d-flex justify-content-center align-items-center fs-1 text-white m-1"
      >
        {formatedSeconds[3]}
      </div>
    </div>
  );
};

export default Counter;
