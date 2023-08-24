import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImg = `/assets/heroes/heroes/${id}.jpg`;
  const navigate = useNavigate();
  return (
    <div className="col p-3">
      <div
        role="button"
        className="card bg-dark hover-shadow h-100 zoom cursor-pointer"
        onClick={() => {
          //ir a la ruta /hero/id
          navigate(`/hero/${id}`);
        }}
      >
        <img
          src={heroImg}
          className="card-img-top"
          style={{ minWidth: "200px" }}
          alt={superhero}
        />
        <div className="card-body">
          <h5 className="card-title text-info">{superhero}</h5>
          <p className="card-text text-light">{alter_ego}</p>
          {alter_ego !== characters && (
            <p className="card-text text-white-50">{characters}</p>
          )}
        </div>
        <div className="card-footer">
          <small className="text-white-50">{first_appearance}</small>
        </div>
      </div>
    </div>
  );
};

HeroCard.propTypes = {
  id: PropTypes.string.isRequired,
  superhero: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  alter_ego: PropTypes.string.isRequired,
  first_appearance: PropTypes.string.isRequired,
  characters: PropTypes.string.isRequired,
};
