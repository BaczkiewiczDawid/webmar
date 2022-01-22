import Icon from 'components/atoms/Icon/Icon';
import { useState, useEffect } from 'react';
import { NavIcons, SearchContainer } from './NavIconsContainer.style';
import { Link } from 'react-router-dom';
import useMobile from 'hooks/useMobile';
import Axios from 'axios';
import SearchBar from 'components/atoms/SearchBar/SearchBar';
import SearchList from 'components/molecules/SearchList/SearchList';

const NavIconsContainer = ({ icons }) => {
    const [searchValue, setSearchValue] = useState('');
    const [usersList, setUsersList] = useState([]);
    const [filteredUsersList, setFilteredUsersList] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const isMobile = useMobile();

    useEffect(() => {
        Axios.get('http://localhost:3001/api/getusers').then((response) => {
            setUsersList(response.data)
        })
    }, []);

    useEffect(() => {
        const filteredUsers = usersList.filter((user) => user.name.toLowerCase().match(searchValue.toLowerCase()))
        setFilteredUsersList(filteredUsers);
    }, [searchValue, usersList]);

    const showSearchList = () => {
        setIsOpen(true)
    }

    return ( 
        <NavIcons>
            {icons.map((icon) => (
                <>
                    {icon.path ? 
                        <Link to={`/${icon.path}`}>
                            <Icon key={icon.id} icon={icon} />
                        </Link>
                    :   
                        <SearchContainer >
                            {!isMobile ? 
                                <> 
                                    <SearchBar showSearchList={showSearchList} setSearchValue={setSearchValue} />
                                    <SearchList isOpen={isOpen} filteredUsersList={filteredUsersList} setIsOpen={setIsOpen} />
                                </>
                            : null}    
                            <Icon key={icon.id} icon={icon} />
                        </SearchContainer>
                    }
                </>
            ))}
        </NavIcons>
     );
}
 
export default NavIconsContainer;