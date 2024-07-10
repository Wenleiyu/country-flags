import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchByname, searchNeighbor } from "../data/flags";
import CountryCard from "../components/CountryCard";
import "../CSS/Country.css";

export default function Country() {
  const { id } = useParams();

  const [flag, setFlag] = useState(null);
  const [neighbor, setNeighbor] = useState(null);
  const [existNeighbor, setExistNeighbor] = useState(0);

  useEffect(() => {
    searchByname({ id }).then((data) => {
      setFlag(data[0]);
      if (data[0].borders) {
        searchNeighbor(data[0].borders[0]).then((data) => {
          setNeighbor(data[0]);
          setExistNeighbor(1);
        });
      }
    });
  }, [id]);

  return flag ? (
    <CountryCard
      country={flag}
      neighbor={neighbor}
      existNeighbor={existNeighbor}
    />
  ) : (
    <h1>Loading...</h1>
  );
}
