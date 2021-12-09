import { heroes } from "../../Data/heroesdata"

export const getHeroById = (id = '') => {
    return heroes.find(hero => hero.id === id); 
}