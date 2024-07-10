import { Link } from "react-router-dom";

export default function FlagDisplay({ visibleFlags }) {
  return (
    <div className="flag-containers">
      {visibleFlags.map((flag) => {
        return (
          <Link to={`/${flag.name.common}`} className="flag-container">
            <div className="flag-container-inner">
              <div className="flag-container-repeat">
                <img
                  key={flag.name.common}
                  src={flag.flags.png}
                  alt={flag.flags.alt}
                ></img>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
