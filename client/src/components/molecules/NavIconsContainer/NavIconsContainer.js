import Icon from 'components/atoms/Icon/Icon';
import { useState } from 'react';
import { NavIcons } from './NavIconsContainer.style';
import { Link } from 'react-router-dom';
import useMobile from 'hooks/useMobile';
import styled from 'styled-components';

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
overflow-y: show;
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

const NavIconsContainer = ({ icons }) => {
    const [searchValue, setSearchValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const isMobile = useMobile();

    const handleSearchValue = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value);
    }

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
                                    <SearchListWrapper isOpen={isOpen}  >
                                    
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