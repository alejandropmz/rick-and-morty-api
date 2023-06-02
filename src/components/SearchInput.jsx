import React from "react";

export const SearchInput = ({ handleInputNumber }) => {
  return (
    <div className="input__container">
      <form onSubmit={handleInputNumber}>
        <input
          id="search__input"
          placeholder="Search ubication from 1 to 126"
          type="text"
        />
      </form>
    </div>
  );
};
