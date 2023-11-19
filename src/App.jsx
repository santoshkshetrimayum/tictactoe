
import Board from './components/Board'

function App() {
  
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center text-center'>
      <h1 className='text-3xl'>TicTacToe game build with <br /> <span className='text-5xl text-cyan-400'> React and Tailwind</span></h1>
      <Board />
    </div>
  
  )
}

export default App
