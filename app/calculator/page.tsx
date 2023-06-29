"use client";
import React, { useState } from "react";

export default function Calculator() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <div>
      <form>
        <input onChange={(e) => setNumber1(Number(e.target.value))} />
        <input onChange={(e) => setNumber2(Number(e.target.value))} />
        <button type="button" onClick={() => setTotal(number1 + number2)}>
          Jumlah
        </button>
        <p>{total}</p>
      </form>
    </div>
  );
}
