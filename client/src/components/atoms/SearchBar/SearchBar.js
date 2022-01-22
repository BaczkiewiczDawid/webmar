import { Search } from './SearchBar.style'

const SearchBar = ({ showSearchList, setSearchValue }) => {
        const handleSetSearchValue = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value);
    }

    return ( 
        <Search placeholder="Search friends..." onClick={showSearchList} onChange={(e) => handleSetSearchValue(e)} />
     );
}
 
export default SearchBar;