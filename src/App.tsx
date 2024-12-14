
import { useState } from 'react'
import './App.scss'
import { ACTIVE_CARD_GAP, ACTIVE_CARD_SIZE, CARD_SIZE } from './constants'
import { GameCardsList } from './GameCardsList/GameCardsList'
import { games } from './games'
import { CrossFader } from 'react-cross-fader'

function App() {

  const[activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='ps5-container' style = {
      {['--card-size']: `${CARD_SIZE}px`,
      ['--active-card-size']: `${ACTIVE_CARD_SIZE}px`,
    } as Record<string, string>
    }>
      <div className='game-cards-list-container'>
        <GameCardsList games ={games} activeIndex={activeIndex} onActiveIndexChange={(i) => setActiveIndex(i)}/>

      </div>
      <CrossFader className='bg-container'>
        <div className='game-bg' style ={{backgroundImage: `url(${games[activeIndex].bg})`}}></div>
      </CrossFader>
      
    </div>
  )
}

export default App
