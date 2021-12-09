import React, { useMemo } from "react";
import { getHeroByPublisher } from "../Helpers/getHeroByPublisher";
import HeroCard from "./HeroCard";
import 'animate.css';
const HeroList = ({ publisher }) => {
  // const heroes = getHeroByPublisher(publisher);
  const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher])
  console.log(heroes);
  return (
    <div className="row rows-cols-1 row-cols-md-3 animate__animated animate__pulse">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero}/>
      ))}
    </div>
  );
};

export default HeroList;
