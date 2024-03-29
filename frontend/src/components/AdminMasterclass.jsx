import "../style/Admin.css";
import "../style/App.css";
import axios from "axios";
import { useState, useEffect } from "react";

import AddMasterclass from "./AddMasterclass";
import EditMasterclass from "./EditMasterclass";

export default function AdminMasterclass() {
  const [showMasterclass, setShowMasterclass] = useState([]);
  const [filterMasterclass, setFilterMasterclass] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/masterclass`)
      .then((res) => {
        setShowMasterclass(res.data.data);
      });
  }, [showMasterclass]);

  const handleFilter = (e) => {
    setFilterMasterclass(e.target.value);
  };

  return (
    <div className="admin-masterclass">
      <h4 className="p-action-masterclass">
        <span className="span-action-m">Modifier</span> ou{" "}
        <span className="span-action-m">Supprimer</span> une masterclass :
      </h4>
      <section className="showMasterclass">
        <label className="label-edit-masterclass" htmlFor="showMasterclass">
          <select
            name="showMasterclass"
            id="showMasterclass"
            onChange={handleFilter}
            className="selectmaster"
          >
            <option value="">Selectionne la Masterclass</option>
            {showMasterclass.map((masterclass) => (
              <option value={masterclass.title} key={masterclass.Id}>
                {masterclass.title}
              </option>
            ))}
          </select>
        </label>
        {showMasterclass
          .filter((filtered) => filtered.title === filterMasterclass)
          .map((elem) => (
            <div key={elem.Id}>
              <EditMasterclass
                key={elem.Id}
                titles={elem.title}
                names={elem.entreprise.name}
                specialities={elem.entreprise.speciality}
                keywords={elem.keywords}
                descs={elem.description}
                sources={elem.source}
                themes={elem.category.name}
                Id={elem.Id}
              />
            </div>
          ))}
      </section>
      <h4 className="p-action-masterclass">
        <span className="span-action-m">Ajouter</span> une masterclass :
      </h4>
      <section className="add-masterclass">
        <AddMasterclass />
      </section>
    </div>
  );
}
