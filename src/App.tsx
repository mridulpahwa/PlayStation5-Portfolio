
import './App.scss'
import { ACTIVE_CARD_GAP, ACTIVE_CARD_SIZE, CARD_SIZE } from './constants'
import { GameCardsList } from './GameCardsList/GameCardsList'
import { games } from './games'

function App() {

  return (
    <div className='ps5-container' style = {
      {['--card-size']: `${CARD_SIZE}px`,
      ['--active-card-size']: `${ACTIVE_CARD_SIZE}px`,
    } as Record<string, string>
    }>
      <GameCardsList games ={games}/>
    </div>
  )
}

export default App
