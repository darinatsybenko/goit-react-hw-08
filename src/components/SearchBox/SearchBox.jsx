import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { setFilter } from "../../redux/filter/slice";
import { selectorFilter } from "../../redux/filter/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectorFilter);
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
