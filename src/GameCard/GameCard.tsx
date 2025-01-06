import {HTMLAttributes} from 'react';
import {Game} from '../types/games.ts';
import './GameCard.scss';

interface GameCardProps extends HTMLAttributes<HTMLDivElement>, Pick<Game, 'name' | 'logo'>{
    active?: boolean;
}


export function GameCard({active, name, logo, ...props}: GameCardProps){
    return (
        <div key = {name}
        className={`game-card ${active ? 'active': ''}`}
        {...props}
        >
            <div className='game-image-container'>
                <img src ={logo} alt={name}/>
            </div>

        </div>
    )
}