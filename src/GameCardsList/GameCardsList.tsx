import { ACTIVE_CARD_GAP, ACTIVE_CARD_SIZE, CARD_GAP, CARD_SIZE, CARDS_OFFEST_X , CARDS_OFFEST_Y} from "../constants";
import { GameCard } from "../GameCard/GameCard";
import {Game} from "../types/games";

interface GameCardsListProps{
    games : Game[];
    activeIndex?: number;
    onActiveIndexChange?: (index: number) => void; 
}

export function GameCardsList({games, activeIndex = 0, onActiveIndexChange} : GameCardsListProps){

    let offsetX = CARDS_OFFEST_X - (activeIndex * (CARD_SIZE + CARD_GAP));

    return <>
    {
        games.map((game, index) => {

            const card =  (
                    <GameCard key = {game.name}
                              {...game}
                              onClick={() => onActiveIndexChange?.(index)}
                              style={{['transform']: `translateX(${offsetX}px) translateY(${CARDS_OFFEST_Y}px)`}}
                              active={activeIndex === index}>
                        <img src={game.logo}/>
                    </GameCard>
            );

            if (index === activeIndex - 1){
                offsetX += CARD_SIZE + ACTIVE_CARD_GAP;
            }else if(index === activeIndex){
                offsetX += ACTIVE_CARD_SIZE + ACTIVE_CARD_GAP;
            }else{
                offsetX += CARD_SIZE + CARD_GAP; 
            }

            return card;
        })
    }
    </>
}