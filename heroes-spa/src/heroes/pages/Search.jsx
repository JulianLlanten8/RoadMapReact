import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { HeroCard } from "../../heroes/components";
import { useForm } from "../../hooks/useForm";
import { getHeroeByName } from "../helpers";
export const Search = () => {
  const navigate = useNavigate();
  // Con useLocation podemos obtener los parametros de la url y asi poder hacer la busqueda
  const location = useLocation();
  // El queryString podemos obtener los parametros de la url y asi poder hacer la busqueda
  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroeByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });
  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchText.trim() || searchText.length < 0) {
      return;
    }
    navigate(`?q=${searchText}`);
  };
  return (
    <main className="container-fluid text-light">
      <h1>SearchPage</h1>
      <div className="row">
        <div className="col-5">
          <h4>Searching </h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-primary mt-2">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div className="alert alert-primary">
            <p>Search hero</p>
          </div>
          <div className="alert alert-danger">
            <p>
              No hero whit <b>{q}</b>
            </p>
          </div>
          <div className="mb-5 px-2">
            {heroes.map((hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
