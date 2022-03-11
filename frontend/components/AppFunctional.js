import React, { useState } from 'react'

export default function AppFunctional(props) {

  const [activeSquare, setActiveSquare] = useState([])

  const moveLeft = () => {

  }

  const moveUp = () => {

  }

  const moveRight = () => {

  }

  const moveDown = () => {

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
        <button id="left" onClick={moveLeft}>LEFT</button>
        <button id="up" onClick={moveUp}>UP</button>
        <button id="right" onClick={moveRight}>RIGHT</button>
        <button id="down" onClick={moveDown}>DOWN</button>
        <button id="reset" onClick={resetGrid}>reset</button>
      </div>
      <form>
        <input id="email" type="email" placeholder="type email"></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
