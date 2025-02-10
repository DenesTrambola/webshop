import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  return (
    <div id="search">
      <input id="search-input" placeholder="I'm looking for..." type="text" />
      <a id="search-text">
        <span>Search</span>
        <i><FontAwesomeIcon icon={faMagnifyingGlass} /></i>
      </a>
      <div id="darkbg" />
    </div>
  )
}

export default Search;
