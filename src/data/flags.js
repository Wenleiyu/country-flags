const searchAll = () => {
  return fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

const searchByname = (id) => {
  return fetch(`https://restcountries.com/v3.1/name/${id.id}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const searchNeighbor = (code) => {
  return fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    .then((response) => response.json())
    .then((data) => data);
};

export { searchAll, searchByname, searchNeighbor };
