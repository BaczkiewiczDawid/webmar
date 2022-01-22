import Icon from 'components/atoms/Icon/Icon';
import { useState, useEffect, useRef } from 'react';
import { NavIcons } from './NavIconsContainer.style';
import { Link } from 'react-router-dom';
import useMobile from 'hooks/useMobile';
import styled from 'styled-components';
import Axios from 'axios';
import useOutsideClick from 'hooks/useOutsideClick';

const SearchContainer = styled.div`
    display: flex;
`;

const SearchListWrapper = styled.div`
    display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
    width: 17rem;
    height: 20rem;
    background-color: ${({ theme }) => theme.colors.white};
    position: absolute;
    z-index: -1;
    box-shadow: -1px 8px 27px -9px ${({ theme }) => theme.colors.black};
    margin-left: -1rem;
    margin-top: -1rem;
    overflow-y: scroll;
`;

const SearchBar = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};

    @media screen and (min-width:768px) {
        margin-right: 2rem;
        padding: .3rem .5rem;
    }
`;

const UsersListContainer = styled.div`
    &:nth-child(n+1) {
        margin-top: 4rem;
    }
`;

const UserContainer = styled(Link)`
    display: flex;
    align-items: center;
    height: 4rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
    text-decoration: none;
`;

const Photo = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 25px;
    margin-left: 1rem;
    background-color: ${({ theme }) => theme.colors.black};
`;

const UserName = styled.span`
    font-weight: 500;
    font-size: 1.2rem;
    margin-left: 1rem;
`;

const NavIconsContainer = ({ icons }) => {
    const [searchValue, setSearchValue] = useState('');
    const [usersList, setUsersList] = useState([]);
    const [filteredUsersList, setFilteredUsersList] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/getusers').then((response) => {
            setUsersList(response.data)
        })
    }, []);

    const ref = useRef();

    useOutsideClick(ref, () => {
        if (isOpen) {
            setIsOpen(false);
        }
    })

    const isMobile = useMobile();

    const handleSearchValue = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value);
    }

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
                                    <SearchBar placeholder="Search friends..." onClick={showSearchList} onChange={(e) => handleSearchValue(e)} />
                                    <SearchListWrapper isOpen={isOpen} ref={ref} >
                                        <UsersListContainer>
                                            {filteredUsersList.map((user) => (
                                                <UserContainer to={`user/${user.id}`} key={user.id}>
                                                    <Photo></Photo>
                                                    <UserName>{user.name}</UserName>
                                                </UserContainer>
                                            ))}
                                        </UsersListContainer>
                                    </SearchListWrapper>
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