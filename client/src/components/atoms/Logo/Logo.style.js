import styled from 'styled-components';

export const LogoContainer = styled.div`
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
