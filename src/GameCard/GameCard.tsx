import {HTMLAttributes} from 'react';
import {Game} from '../types/games.ts'

interface GameCardProps extends HTMLAttributes<HTMLDivElement>, Pick<Game, 'name' | 'logo'>{
    active?: boolean;
}


export function GameCard(){

}