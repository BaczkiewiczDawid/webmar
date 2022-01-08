import styled from 'styled-components';
import searchIcon from 'assets/images/search-icon.svg';
import chatIcon from 'assets/images/chat-icon.svg';
import userIcon from 'assets/images/user-icon.svg';

const Nav = styled.nav`
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    min-height: 10vh;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

const Logo = styled.div`
    margin-left: 1rem;

    a {
        text-decoration: none;
        font-weight: 700;
        font-size: 1.3rem;
    }

    @media screen and (min-width: 768px) {
        margin-left: 2rem;
    }

    @media screen and (min-width: 1024px) {
        margin-left: 4rem;
    }
`;

const NavIcons = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1rem;
    justify-content: space-between;
    width: 6rem;

    @media screen and (min-width: 768px) {
        margin-right: 2rem;
        width: 8rem;
    }

    @media screen and (min-width: 1024px) {
        margin-right: 4rem;
        width: 10rem;
    }
`;

const Icon = styled.img`
    width: 1rem;
    height: 1rem;

    @media screen and (min-width: 768px) {
        width: 1.2rem;
        height: 1.2rem;
    }
`;

const Navigation = () => {
    return ( 
        <Nav>
            <Logo>
                <a href="/">WEBMAR</a>
            </Logo>
            <NavIcons>
                <Icon src={searchIcon} alt="search" />
                <Icon src={userIcon} alt="search" />
                <Icon src={chatIcon} alt="chat" />
            </NavIcons>
        </Nav>
     );
}
 
export default Navigation;