/* eslint-disable camelcase */
import { useContext } from "react";
import CurrentUserContext from "../../contexts/currentUser";
import VideoSample from "../VideoSample";
import "../../style/MyMCFavoritesList.css";
import "../../style/VideoSample.css";

export default function MyMCFavoritesList() {
  const { userProfil } = useContext(CurrentUserContext);

  return (
    <section className="show-favorite-videos">
      {userProfil.favorites.length !== 0 ? (
        userProfil.favorites.map((favorite) => (
          <VideoSample
            addButton
            masterclassId={favorite}
            key={`${favorite}_${userProfil.Id}`}
          />
        ))
      ) : (
        <p>Oops! La liste de vos favoris est vide.</p>
      )}
    </section>
  );
}
