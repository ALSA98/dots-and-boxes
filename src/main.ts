import './style.css'
import { Setup } from './components/setup'
import { GameBoard } from './components/game-board'

// const app = document.querySelector<HTMLDivElement>('#app')!

new Setup((rowsCount: number, columnsCount: number) => {
  new GameBoard(rowsCount, columnsCount)
})

// app.innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `
