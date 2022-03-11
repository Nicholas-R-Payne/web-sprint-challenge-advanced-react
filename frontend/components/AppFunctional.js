import React, { useState, useEffect } from 'react'
import axios from 'axios'

const initialState = {
  x: 2,
  y: 2,
  steps: 0,
  email: ''
}

export default function AppFunctional(props) {

  const [grid, setGrid] = useState(initialState)
  const [error, setError] = useState('')

  useEffect(() => {
    setActive(grid.x, grid.y)
  }, [grid])


  const setActive = (x, y) => {

    const grid = document.getElementsByClassName('square')

    for(let i = 0; i < grid.length; i++) {
      if(grid[i].classList.contains('active')) {
        grid[i].classList.remove('active')
      }
      if(grid[i].textContent) {
        grid[i].textContent = ''
      }
    }

    if(x === 1 && y === 1) {
      grid[0].classList.add('active')
      grid[0].textContent = 'B'
    } else if(x === 2 && y === 1) {
      grid[1].classList.add('active')
      grid[1].textContent = 'B'
    } else if(x === 3 && y === 1) {
      grid[2].classList.add('active')
      grid[2].textContent = 'B'
    } else if(x === 1 && y === 2) {
      grid[3].classList.add('active')
      grid[3].textContent = 'B'
    } else if(x === 2 && y === 2) {
      grid[4].classList.add('active')
      grid[4].textContent = 'B'
    } else if(x === 3 && y === 2) {
      grid[5].classList.add('active')
      grid[5].textContent = 'B'
    } else if(x === 1 && y === 3) {
      grid[6].classList.add('active')
      grid[6].textContent = 'B'
    } else if(x === 2 && y === 3) {
      grid[7].classList.add('active')
      grid[7].textContent = 'B'
    } else if(x === 3 && y === 3) {
      grid[8].classList.add('active')
      grid[8].textContent = 'B'
    }
  }

  const moveActive = (evt) => {
    switch(evt.target.textContent) {
      case 'UP':
        if(grid.y === 1) {
          setError("You can't go up")
        } else {
          if(error){
            setError('')
          }
          setGrid({ ...grid, y: grid.y - 1, steps: grid.steps + 1 })
        }
        break
      case 'DOWN':
        if(grid.y === 3) {
          setError("You can't go down")
        } else {
          if(error){
            setError('')
          }
          setGrid({ ...grid, y: grid.y + 1, steps: grid.steps + 1 })
        }
        break
      case 'LEFT':
        if(grid.x === 1) {
          setError("You can't go left")
        } else {
            if(error){
              setError('')
            }
          setGrid({ ...grid, x: grid.x - 1, steps: grid.steps + 1 })
        }
          break
        case 'RIGHT':
          if(grid.x === 3) {
            setError("You can't go right")
        } else {
            if(error){
              setError('')
            }
          setGrid({ ...grid, x: grid.x + 1, steps: grid.steps + 1 })
        }    
    }
  }

  const resetGrid = () => {
    if(error) {
      setError('')
    }
    setGrid(initialState)
  }

  const handleChange = (evt) => {
    setGrid({ ...grid, email: evt.target.value })
  }

  const handleSubmit = (evt) => {

    evt.preventDefault();

    axios.post('http://localhost:9000/api/result', grid)
      .then(res => {
        setError(res.data.message)
        setGrid({ ...grid, email: '' })
      })
      .catch(() => {
        if(grid.email === '') {
          setError('Ouch: email is required')
        } else if(grid.email[grid.email.length-4] !== '.') {
          setError('Ouch: email must be a valid email')
        } else {
          setError(`${grid.email} failure #71`)
        }
      })
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates ({grid.x}, {grid.y})</h3>
        <h3 id="steps">You moved {grid.steps} time{grid.steps !== 1 ? 's' : ''}</h3>
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
        <input id="email" type="email" placeholder="type email" value={grid.email} onChange={handleChange}></input>
        <input id="submit" type="submit" onClick={handleSubmit}></input>
      </form>
    </div>
  )
}
