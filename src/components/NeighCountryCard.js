export default function NeighCountryCard({ neighbor }) {
  return (
    <div className="single-country-neigh-container">
      <div className="single-country-neigh">
        <div className="single-country-flag">
          <img
            key={neighbor.name.common}
            src={neighbor.flags.png}
            alt={neighbor.flags.alt}
            className="flag"
          ></img>
        </div>
        <div className="single-country-info">
          <div className="single-country-coa">
            <img
              src={neighbor.coatOfArms.png}
              className="coa"
              alt="Coast of Arms"
            ></img>
          </div>
          <div className="single-country-neigh-name">
            <h3>Neighbor: {neighbor.name.common}</h3>
          </div>
          <div className="single-country-cc">
            🏛️ Capital City: {neighbor.capital}
          </div>
          <div className="single-country-pop">
            🤷‍♀️ Population: {neighbor.population / 1000000}M
          </div>
          <div className="single-country-lang">
            Language: {Object.values(neighbor.languages)[0]}
          </div>
          <div className="single-country-lang">
            🀄 Zho: {neighbor.translations.zho?.common}
          </div>
        </div>
      </div>
    </div>
  );
}
