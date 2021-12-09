import React, { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../Helpers/getHeroById";
const HeroScreen = () => {
  const { heroid } = useParams();
//   const heroe = getHeroById(heroid);

  const history = useNavigate();
  const handleReturn = () => {
    history(-1);
  };
  const heroe = useMemo(() => getHeroById(heroid), [heroid])
  if (!heroe) {
    return <Navigate to="/" />;
  }
  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    heroe;

  const imagePath = `/assets/${id}.jpg`;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={imagePath} alt={superhero} className="img-thumbnail  animate__animated animate__bounceInLeft" />
      </div>

      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Alter Ego: </b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {publisher}
          </li>
          <li className="list-group-item">
            <b>first_appearance: </b>
            {first_appearance}
          </li>
          <li className="list-group-item">
            <b>characters: </b>
            {characters}
          </li>
        </ul>

        <button className="btn btn-outline-dark m-5" onClick={handleReturn}>
          Back
        </button>
      </div>
    </div>
  );
};

export default HeroScreen;
