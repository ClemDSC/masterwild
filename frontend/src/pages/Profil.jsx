import { React, useState } from "react";
import MyProfil from "../components/MyProfil";
import MyMCFavorites from "../components/MyMCFavorites";
import "../style/Profil.css";

export default function Profil() {
  const [selectOnglet, setSelectOnglet] = useState(0);

  const profilChange = () => {
    setSelectOnglet(0);
  };

  const mcFavoriteChange = () => {
    setSelectOnglet(1);
  };

  return (
    <div>
      <div className="contBtn">
        <button
          type="button"
          onClick={mcFavoriteChange}
          className={`ongletLeft ${selectOnglet ? "ongletLeftActive" : ""}`}
        >
          Mes Masterclass
        </button>
        <button
          type="button"
          onClick={profilChange}
          className={`ongletRight ${!selectOnglet ? "ongletRightActive" : ""}`}
        >
          {" "}
          Mon Profil
        </button>
      </div>

      <div>{selectOnglet ? <MyMCFavorites /> : <MyProfil />}</div>
    </div>
  );
}
