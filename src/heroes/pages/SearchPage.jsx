import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm";
import { getHeroByName } from "../helpers/getHeroByName";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {
  const navigate = useNavigate(); //Obtener la navegación
  const location = useLocation(); //Obtener la localización donde nos encontramos
  const { q = "" } = queryString.parse(location.search); //Obtener el query de la url

  const heroes = getHeroByName(q);

  const showSearch = (q.length === 0);
  const showError  = (q.length > 0) && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length < 1) {
      return;
    }
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit} aria-label="form">
            <input
              type="text"
              placeholder="Buscar héroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div  className="alert alert-primary animate__animated animate__fadeIn" style={{display : showSearch  ? '' : 'none'}}>
            Busca un héroe
          </div>

          <div aria-label="alert-danger" className="alert alert-danger animate__animated animate__fadeIn" 
                style={{ display: showError ? '' : 'none' }}>
            No hero with <b>{q}</b>
          </div>
          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
