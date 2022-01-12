import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    position: fixed;
    background-color: ${({ theme }) => theme.colors.white};
    top: 0;
    width: 100vw;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    height: 4rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;