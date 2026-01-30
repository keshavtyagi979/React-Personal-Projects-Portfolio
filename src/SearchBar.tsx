// function SearchBar({ searchText, setSearchText, handleSearch }){
//     return (<div className="Thirdbar"><div className="search-wrapper"><input type="text" className="search-bar" placeholder="Search-Projects" value={searchText} onChange={(e) => setSearchText(e.target.value)} /><button className="search-button" onClick={handleSearch}><img src="src/img/Search-icon.png" alt="" className="search-icon" /><div className="tool-tip">Search</div></button></div></div>);
// }
// export default SearchBar;

type SearchBarProps = {
  searchText: string;
  setSearchText: (value: string) => void;
  handleSearch: () => void;
};

function SearchBar({ searchText, setSearchText, handleSearch }: SearchBarProps) {
  return (
    <div className="Thirdbar">
      <div className="search-wrapper">
        <input
          type="text"
          className="search-bar"
          placeholder="Search Projects"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button className="search-button" onClick={handleSearch}>
          <img
            src="/src/img/Search-icon.png"
            alt="search"
            className="search-icon"
          />
          <div className="tool-tip">Search</div>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
