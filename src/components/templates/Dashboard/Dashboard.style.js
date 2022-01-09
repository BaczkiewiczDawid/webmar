import styled from 'styled-components';

export const PostsContainer = styled.section`
    width: 90vw;
    margin: 3rem auto;

    @media screen and (min-width: 768px) {
        width: 40vw;
        margin: 8rem 4rem;
    }

    @media screen and (min-width: 1200px) {
        width: 35vw;
    }
`;