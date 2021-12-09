import { heroes } from "../../Data/heroesdata";



export const getHeroByName = (name = '') => {

    if(name === ''){
        return [];
        
    }else{
        return heroes.filter(hero => hero.superhero.toLowerCase().includes(name));
    }
}