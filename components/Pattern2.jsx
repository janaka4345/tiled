"use client";

import { useState } from "react";

export default function Pattern2() {
  const BASE_COLOR = "black";
  const VARYING_COLOR = "red";
  const [state, setState] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
  });
  function handleClick(e) {
    const id = e.target.id;
    const value = !state[id];
    setState((prev) => ({ ...prev, [id]: value }));
  }
  return (
    <svg className="" viewBox="0 0 300 300" xmlns="http:www.w3.org/2000/svg">
      <path
        id="one"
        onClick={handleClick}
        d="M 0 0 h100 v100 h-100 v-100  "
        stroke="white"
        strokeWidth="10"
        fill={state.one ? VARYING_COLOR : BASE_COLOR}
      />
      <path
        id="two"
        onClick={handleClick}
        d="M 0 100 h100 l50 50 l-50 50 h-100 v-100"
        stroke="white"
        strokeWidth="10"
        fill={state.two ? VARYING_COLOR : BASE_COLOR}
      />
      <path
        id="three"
        onClick={handleClick}
        d="M 0 200 h100 v100 h-100 v-100 "
        stroke="white"
        strokeWidth="10"
        fill={state.three ? VARYING_COLOR : BASE_COLOR}
      />
      <path
        id="four"
        onClick={handleClick}
        d="M 100 000 h100 v100 l-50 50 l-50 -50 v-100  "
        stroke="white"
        strokeWidth="10"
        fill={state.four ? VARYING_COLOR : BASE_COLOR}
      />
      <path
        id="five"
        onClick={handleClick}
        d="M 100 200 l50 -50 l50 50 v100 h-100 v-100  "
        stroke="white"
        strokeWidth="10"
        fill={state.five ? VARYING_COLOR : BASE_COLOR}
      />
      <path
        id="six"
        onClick={handleClick}
        d="M 200 0 h100 v100 h-100 v-100  "
        stroke="white"
        strokeWidth="10"
        fill={state.six ? VARYING_COLOR : BASE_COLOR}
      />
      <path
        id="seven"
        onClick={handleClick}
        d="M 200 100 h100 v100 h-100 l-50 -50 l50 -50 "
        stroke="white"
        strokeWidth="10"
        fill={state.seven ? VARYING_COLOR : BASE_COLOR}
      />
      <path
        id="eight"
        onClick={handleClick}
        d="M 200 200 h100 v100 h-100 v-100 "
        stroke="white"
        strokeWidth="10"
        fill={state.eight ? VARYING_COLOR : BASE_COLOR}
      />
    </svg>
  );
}
