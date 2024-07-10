import "../App.css";
import { useEffect, useState } from "react";
import { searchAll } from "../data/flags";
import SearchBar from "../components/SearchBar";
import FlagDisplay from "../components/FlagDisplay";

export default function HomePage() {
  const [originalflags, setOriginalFlags] = useState([]);
  const [visibleFlags, setVisibleFlags] = useState([]);

  useEffect(() => {
    searchAll().then((data) => {
      setOriginalFlags(data);
      setVisibleFlags(data);
    });
  }, []);

  function handleSearchFlag(e) {
    const newflags = originalflags.filter((flag) => {
      return flag.name.common
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setVisibleFlags(newflags);
  }

  return (
    <div className="App">
      <SearchBar handleSearchFlag={handleSearchFlag} />
      <FlagDisplay visibleFlags={visibleFlags} />
    </div>
  );
}
