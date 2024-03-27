import css from "./SearchBox.module.css";

const SearchBox = ({ filter, onChangeFilter }) => {
  return (
    <div className={css.searchContainer}>
      <h2 className={css.inputText}>Find contacts by name</h2>
      <input
        className={css.inputSearch}
        type="text"
        id="searchInpu"
        placeholder="Enter your search query"
        value={filter}
        onChange={onChangeFilter}
      />
    </div>
  );
};

export default SearchBox;
