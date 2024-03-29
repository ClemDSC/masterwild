import { useNavigate } from "react-router";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CurrentUserContext from "../contexts/currentUser";

/* eslint-disable react/prop-types */
import "../style/CardMasterclass.css";

export default function CardMasterclass({ mastercard }) {
  const mastercardLink = `/masterclass/${mastercard.Id}`;
  const nav = useNavigate();
  const { userProfil } = useContext(CurrentUserContext);

  const goToMasterclass = () => {
    nav(mastercardLink);
  };

  return (
    <div className="card-container">
      <div className="contenu-card">
        <div className="pPresEntreprise">
          <h2 className="pCardNameEntreprise">{mastercard.entreprise.name}</h2>
          <p className="pCardSpecialityEntreprise">
            ( {mastercard.entreprise.speciality} )
          </p>
        </div>

        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/data/uploads/${
            mastercard.entreprise.logo_name
          }`}
          alt={mastercard.entreprise.name}
          className="logo2"
        />
      </div>
      <div className="title-desc">
        <h3 className="title-card">{mastercard.title}</h3>
        <p className="overflow-ellipsis">{mastercard.description}</p>
      </div>
      <div className="button-start">
        {userProfil ? (
          <button type="button" className="voir-vid" onClick={goToMasterclass}>
            Voir
          </button>
        ) : (
          <NavLink to="/connexion">
            <button type="button" className="voir-vid">
              Voir
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
}
