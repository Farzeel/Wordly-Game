
import React from "react";

const Keyboard = ({ onKeyPress }) => {
  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Backspace"],
  ];

  return (
    <div className="w-full px-2 mt-4"> 
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-1">
          {row.map((key) => (
            <button
              key={key}
              onClick={() => onKeyPress({ key })}
              className={`flex-1 py-2 px-1 rounded-md bg-gray-700 text-white mx-0.5 my-1 ${ 
                key === "Enter" || key === "Backspace" ? "px-4" : ""
              }`}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;