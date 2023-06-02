import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import randomNumberLocation from "./utils/getRandomLocation";
import { LocationCard } from "./components/LocationCard";
import { PopulationInfo } from "./components/PopulationInfo";
import { Header } from "./components/Header";
import { SearchInput } from "./components/SearchInput";
import { NoPeople } from "./components/NoPeople";
import { Loading } from "./components/Loading";

function App() {
  const [location, setLocation] = useState();
  const [randomNumber, setRandomNumber] = useState();
  const [hasError, setHasError] = useState(false);

  const handleInputNumber = (e) => {
    e.preventDefault();
    setRandomNumber(e.target.search__input.value.trim());
    e.target.search__input.value = "";
  };

  // Load random number
  useEffect(() => {
    setRandomNumber(randomNumberLocation());
  }, []);

  // Load rick & morty locations
  useEffect(() => {
    if (randomNumber) {
      const url = `https://rickandmortyapi.com/api/location/${randomNumber}`;

      axios
        .get(url)
        .then((res) => {
          setLocation(res.data);
          setHasError(false);
        })
        .catch((err) => {
          console.log(err);
          setHasError(true);
        });
    } else if (randomNumber === "") {
      setRandomNumber(randomNumberLocation());
    }
  }, [randomNumber]);

  console.log(hasError);

  return (
    <div className="app">
      <Header />
      <SearchInput handleInputNumber={handleInputNumber} />
      {location ? (
        <>
          {hasError ? "" : <LocationCard location={location} />}
          <div className="cards__container">
            {hasError ? (
              <NoPeople message={"That search doesn't exists Morty!!"} />
            ) : location.residents.length === 0 ? (
              <NoPeople message={"There are no people Morty!"} />
            ) : (
              location.residents.map((url) => (
                <PopulationInfo key={url} url={url} />
              ))
            )}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
