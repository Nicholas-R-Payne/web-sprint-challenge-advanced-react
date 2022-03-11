import React, { useState } from 'react'

const initialState = {
  x: 2,
  y: 2,
  steps: 0,
  email: ''
}

export default function AppFunctional(props) {

  const [grid, setGrid] = useState(initialState)

  const moveActive = (evt) => {

  }

  const resetGrid = () => {

  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates (2, 2)</h3>
        <h3 id="steps">You moved 0 times</h3>
      </div>
      <div id="grid">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square active">B</div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
      <div className="info">
        <h3 id="message"></h3>
      </div>
      <div id="keypad">
        <button id="left" onClick={moveActive}>LEFT</button>
        <button id="up" onClick={moveActive}>UP</button>
        <button id="right" onClick={moveActive}>RIGHT</button>
        <button id="down" onClick={moveActive}>DOWN</button>
        <button id="reset" onClick={resetGrid}>reset</button>
      </div>
      <form>
        <input id="email" type="email" placeholder="type email"></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
