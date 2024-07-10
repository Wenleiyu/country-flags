import NeighCountryCard from "./NeighCountryCard";

export default function CountryCard({ country, neighbor, existNeighbor }) {
  const neightContent = existNeighbor ? (
    <NeighCountryCard neighbor={neighbor} />
  ) : (
    ""
  );
  return (
    <div className={`country-neigh-${existNeighbor}`}>
      <div className={`single-country-container-${existNeighbor}`}>
        <div className="single-country">
          <div className="single-country-flag">
            <img
              key={country.name.common}
              src={country.flags.png}
              alt={country.flags.alt}
              className="flag"
            ></img>
          </div>
          <div className="single-country-info">
            <div className="single-country-coa">
              <img
                src={country.coatOfArms.png}
                className="coa"
                alt="Coast of Arms"
              ></img>
            </div>
            <div className="single-country-name">
              <h3>{country.name.common}</h3>
            </div>
            <div className="single-country-region">
              🌍 Region: {country.region}
            </div>
            <div className="single-country-cc">
              🏛️ Capital City: {country.capital}
            </div>
            <div className="single-country-pop">
              🤷‍♀️ Population: {country.population / 1000000}M
            </div>
            <div className="single-country-lang">
              Language: {Object.values(country.languages)[0]}
            </div>
            <div className="single-country-lang">
              🀄 Zho: {country.translations.zho?.common}
            </div>
            <div className="single-country-map">
              <a href={country.maps.googleMaps}>{country.maps.googleMaps}</a>
            </div>
          </div>
        </div>
      </div>
      {neightContent}
    </div>
  );
}
