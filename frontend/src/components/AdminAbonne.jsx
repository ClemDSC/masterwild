import "../style/Admin.css";
import "../style/App.css";
import { useState } from "react";
import PropTypes from "prop-types";
import UsersList from "./UsersList";
import ProList from "./ProList";

export default function AdminAbonne({ users, professionals }) {
  AdminAbonne.propTypes = {
    users: PropTypes.string.isRequired,
    professionals: PropTypes.string.isRequired,
  };
  const [selectUsers, setSelectUsers] = useState(true);
  const [showNonAbonne, setShowNonAbonne] = useState(false);
  const [filterUsers, setFilterUsers] = useState([]);
  const [filterPro, setFilterPro] = useState([]);
  const handleAbonne = () => {
    setSelectUsers((current) => !current);
    setShowNonAbonne(!true);
  };
  const handleNonAbonne = () => {
    setShowNonAbonne((current) => !current);
    setSelectUsers(!true);
  };

  const handleFilter = (e) => {
    setFilterUsers(e.target.value);
  };
  const handleProFilter = (e) => {
    setFilterPro(e.target.value);
  };
  return (
    <section className="showClients">
      <div className="buttonClient">
        {" "}
        <button className="btnAbonne" type="button" onClick={handleAbonne}>
          Abonnés
        </button>
        <button className="btnAbonne" type="button" onClick={handleNonAbonne}>
          Non-Abonnés
        </button>
      </div>
      {selectUsers && (
        <div className="abonnes">
          <select
            name="showUsers"
            className="choose-clients"
            placeholder="Selection Abonné"
            onChange={handleFilter}
          >
            {" "}
            <option value="">Liste des Utilisateurs</option>
            {users.map((user) => (
              <option value={user.lastname} key={user.Id}>
                {user.Id} - {user.lastname} {user.firstname}
              </option>
            ))}
          </select>
          {users
            .filter((filtered) => filtered.lastname === filterUsers)
            // console.log(users)
            .map((elem) => (
              <UsersList users={elem} key={elem.Id} />
            ))}
        </div>
      )}

      {showNonAbonne && (
        <div className="non-abonnes">
          <select
            name="showUsers"
            className="choose-clients"
            placeholder="Selection Abonné"
            onChange={handleProFilter}
          >
            {" "}
            <option value="">Liste des Entreprises</option>
            {professionals.map((pro) => (
              <option value={pro.firstname} key={pro.Id}>
                {pro.Id} - {pro.lastname} {pro.firstname}
              </option>
            ))}
          </select>
          {professionals
            .filter((filtered) => filtered.firstname === filterPro)
            .map((elem) => (
              <ProList pro={elem} key={elem.Id} />
            ))}
        </div>
      )}
    </section>
  );
}
