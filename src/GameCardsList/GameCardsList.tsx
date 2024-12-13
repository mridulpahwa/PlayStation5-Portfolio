import {Game} from "../types/games";

interface GameCardsListProps{
    games : Game[];
    activeIndex?: number;
    onActiveIndexChange?: (index: number) => void; 
}

export function GameCardsList({games, activeIndex, onActiveIndexChange} : GameCardsListProps){
    return <>
    {
        games.map((game) => {
            return <div className = "game-card">
                <img src={game.logo}/>
            </div>
        })
    }
    </>
}