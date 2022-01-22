import styled from 'styled-components';

export const Search = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};

    @media screen and (min-width:768px) {
        margin-right: 2rem;
        padding: .3rem .5rem;
    }
`;