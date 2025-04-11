import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Squard from './component/Squard'
import Board from './component/Board'

function App() {

  return (
    <>
      <div className='app'>
        <h1><u>Tic-Tac-Toe</u></h1>
        <div className='game'>
         <Board/>
        </div>
      </div>
    </>
  )
}

export default App
