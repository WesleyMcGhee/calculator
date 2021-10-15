import React, { useState } from "react";
import "./main.css";
export default function Main() {
  return (
    <div>
      <h1>Calculator</h1>
      <div className="calculator">
        <div className="screen">
          <h2 className="display"></h2>
        </div>
        <div className="btn-container">
          <div className="buttons-nums">
            <button className="btn" value="1">
              1
            </button>
            <button className="btn" value="2">
              2
            </button>
            <button className="btn" value="3">
              3
            </button>
            <button className="btn" value="4">
              4
            </button>
            <button className="btn" value="5">
              5
            </button>
            <button className="btn" value="6">
              6
            </button>
            <button className="btn" value="7">
              7
            </button>
            <button className="btn" value="8">
              8
            </button>
            <button className="btn" value="9">
              9
            </button>
            <button className="btn mid" value="0">
              0
            </button>
          </div>
          <div className="operators">
            <button className="btn gap" value="+">
              +
            </button>
            <button className="btn gap" value="-">
              -
            </button>
            <button className="btn gap" value="/">
              /
            </button>
            <button className="btn gap" value="*">
              *
            </button>
            <button className="final btn gap" value="=">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
