
import { useState } from 'react'
import './App.scss'
import { ACTIVE_CARD_GAP, ACTIVE_CARD_SIZE, CARD_SIZE, CARDS_OFFEST_X, CARDS_OFFEST_Y } from './constants'
import { GameCardsList } from './GameCardsList/GameCardsList'
import { games } from './games'
import { CrossFader } from 'react-cross-fader'
import { usePrevious } from './hooks/usePrevious'

function App() {

  const[activeIndex, setActiveIndex] = useState(0);
  const previousActiveIndex = usePrevious(activeIndex);

  const isNext = ((previousActiveIndex ?? 0) < activeIndex);

  const cardTitleX = CARDS_OFFEST_X + ACTIVE_CARD_SIZE + ACTIVE_CARD_GAP + 10;
  const cardTitleY = CARDS_OFFEST_Y + ACTIVE_CARD_SIZE - 32;

  return (
    <div className='ps5-container' style = {
      {['--card-size']: `${CARD_SIZE}px`,
      ['--active-card-size']: `${ACTIVE_CARD_SIZE}px`,
    } as Record<string, string>
    }>
      <div className='game-cards-list-container'>
        <GameCardsList games ={games} activeIndex={activeIndex} onActiveIndexChange={(i) => setActiveIndex(i)}/>
      </div>
      <CrossFader className='card-title' style={{left: `${cardTitleX}px`, top: `${cardTitleY}px`}}>
      <div>
        {games[activeIndex].name}
      </div>
      </CrossFader>
     
      <CrossFader className={`bg-container ${isNext ? 'next': 'previous'}`}>
        <div className='game-bg' style ={{backgroundImage: `url(${games[activeIndex].bg})`}}></div>
      </CrossFader>

      <CrossFader className='play-container'>
        <h1>{games[activeIndex].name}</h1>
        <button>Play</button>
      </CrossFader>
      
    </div>
  )
}

export default App
