import './style.css'
import { Setup } from './components/setup'
import { GameBoard } from './components/game-board'


new Setup((rowsCount: number, columnsCount: number) => {
   new GameBoard(rowsCount, columnsCount)
})
