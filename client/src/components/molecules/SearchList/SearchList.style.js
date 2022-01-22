import styled from 'styled-components';

export const UsersListContainer = styled.div`
    &:nth-child(n+1) {
        margin-top: 4rem;
    }
`;

export const SearchListWrapper = styled.div`
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
