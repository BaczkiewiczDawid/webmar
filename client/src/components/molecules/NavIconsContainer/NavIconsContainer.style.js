import styled from 'styled-components';

export const NavIcons = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1rem;
    justify-content: space-between;
    width: 6rem;
    cursor: pointer;

    @media screen and (min-width: 768px) {
        margin-right: 2rem;
        width: 21rem;
    }

    @media screen and (min-width: 1024px) {
        margin-right: 4rem;
        width: 21rem;
    }
`;

export const SearchContainer = styled.div`
    display: flex;
`;
