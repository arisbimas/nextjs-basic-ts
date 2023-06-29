"use client";
import React, { useState } from "react";

export default function Calculator() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <div>
      <form>
        <input
          className="shadow appearance-none border rounded w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setNumber1(Number(e.target.value))}
        />
        <input
          className="shadow appearance-none border rounded w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setNumber2(Number(e.target.value))}
        />
        <div className="flex gap-2">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setTotal(number1 + number2)}
          >
            Jumlah
          </button>
          <p> hasil : {total}</p>
        </div>
      </form>
    </div>
  );
}
