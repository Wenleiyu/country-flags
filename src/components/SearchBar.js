export default function SearchBar({ handleSearchFlag }) {
  return (
    <header className="flag-search-bar-container">
      <input
        className="flag-search-bar"
        type="text"
        placeholder="Search Country"
        onChange={(e) => handleSearchFlag(e)}
      ></input>
    </header>
  );
}
