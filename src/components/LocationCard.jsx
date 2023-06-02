import React from "react";

export const LocationCard = ({ location }) => {
  return (
    <article className="location__card__container">
      <h3>{location.name}</h3>
      <div className="card__info">
        <p>Type: {location.type}</p>
        <p>Dimension: {location.dimension}</p>
        <p>Population: {location.residents.length}</p>
      </div>
    </article>
  );
};
