"use client";

import fn from "utils/exportResultFunction";
import { minusFunction, plusFunction } from "utils/resultFunction";
import { useState } from "react";

const Jest = () => {
  const [number, setNumber] = useState(10);

  return (
    <div>
      <button onClick={() => window.alert("alert")}>alert</button>
      <span>{number}</span>
      <button onClick={() => setNumber((i) => plusFunction(i))}>plus</button>
      <button onClick={() => setNumber((i) => minusFunction(i))}>minus</button>
      <span>{number}</span>
      <button onClick={() => setNumber((i) => fn.plusFunction(i))}>exportPlus</button>
      <button onClick={() => setNumber((i) => fn.minusFunction(i))}>exportMinus</button>
    </div>
  );
};

export default Jest;
