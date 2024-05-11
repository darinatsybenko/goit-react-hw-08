import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { setFilter } from "../../redux/filter/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.contacts.name);
  const onChangeFilter = (event) => {
    dispatch(setFilter(event.target.value));
  };

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
