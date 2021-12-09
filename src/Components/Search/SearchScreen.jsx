import React, { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { getHeroByName } from "../Helpers/getHeroByName";
import HeroCard from "../Hero/HeroCard";
import queryString from "query-string";

const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  //   console.log(location.search)

  const { q = "" } = queryString.parse(location.search);
  const [datos, handleInputChange] = useForm({
    searchParams: q,
  });

  const heroesFiltrados = useMemo(() => getHeroByName(q), [q]);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${datos.searchParams}`);
    console.log(datos.searchParams);
  };
  return (
    <div>
      <h1>Search Screen</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="searchParams"
              placeholder="Search hero"
              autoComplete="off"
              className="form-control"
              value={datos.searchParams}
              onChange={handleInputChange}
            />

            <button type="submit" className="btn btn-primary mt-5">
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {heroesFiltrados.includes(q) && (
            <p>
              No hay heroes con la información dada <strong>{q}</strong>
            </p>
          )}
          {/* {heroesFiltrados}{q} */}
          {q === "" ? (
            <div className="alert alert-info text-center" role="alert">
              You have not made any search!!
            </div>
          ) : (heroesFiltrados.length === 0) && (
            <div className="alert alert-danger text-center" role="alert">
              Sorry, the hero you are looking for is not in the database: {q}.
            </div>
          )}
          {heroesFiltrados.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
