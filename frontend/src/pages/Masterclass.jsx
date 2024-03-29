import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import { NavLink, useParams } from "react-router-dom";
import VideoSample from "../components/VideoSample";
import CardMasterclass from "../components/CardMasterclass";
import "../style/Masterclass.css";

export default function Masterclass({ isOnline }) {
  Masterclass.propTypes = {
    isOnline: PropTypes.string.isRequired,
  };
  const [listMasterclass, setListMasterclass] = useState([]);
  const params = useParams();
  const paramMasterId = parseInt(params.masterclassId, 10);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isOnline) {
      navigate("/403");
    } else {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/masterclass`)
        .then((res) => {
          setListMasterclass(res.data.data);
        });
    }
  }, []);

  return (
    <div className="masterclass">
      <div className="container-masterclass">
        <VideoSample masterclassId={paramMasterId} addVideo />
        <section className="suggestions">
          <ul className="carousel-items">
            {listMasterclass?.map((mastercard) => (
              <li className="carousel-item" key={mastercard.Id}>
                <CardMasterclass key={mastercard.Id} mastercard={mastercard} />
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="go-to-search">
        <NavLink to="/search" className="global-return-button">
          <button type="button" className="return-button">
            <svg
              height="32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 1024 1024"
            >
              <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z" />
            </svg>
            <span>Retour</span>
          </button>
        </NavLink>
      </div>
    </div>
  );
}
