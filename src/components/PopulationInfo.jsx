import axios from "axios";
import React, { useEffect, useState } from "react";

export const PopulationInfo = ({ url }) => {
  const [character, setCharacter] = useState();

  useEffect(() => {
    axios(url)
      .then((res) => setCharacter(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="population__container">
      <img src={character?.image} alt="" />
      <section className="card__info">
        <div>
          <h3>{character?.name}</h3>
          <h5 className="status">
            <i className={`bx bxs-circle ${character?.status}`}></i>
            <span>{character?.status}</span> - {character?.species}
          </h5>
        </div>
        <h5>
          <span className="gray">Origin:</span> {character?.origin.name}
        </h5>
        <h5>
          <span className="gray">Gender:</span> {character?.gender}
        </h5>
        <h5>
          <span className="gray">Type:</span>{" "}
          {!character?.type ? "Undefined" : character?.type}
        </h5>
        <h5>
          <span className="gray">Episodes:</span> {character?.episode.length}
        </h5>
        <h5>
          <span className="gray">Location:</span> {character?.location.name}
        </h5>
      </section>
    </article>
  );
};
