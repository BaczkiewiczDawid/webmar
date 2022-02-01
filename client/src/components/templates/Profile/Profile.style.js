import styled from 'styled-components';

export const Wrapper = styled.div`
    @media screen and (min-width: 768px) {
        margin-top: 15vh;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
`;

export const PostsWrapper = styled.article`
    width: 90vw;
    margin: 3rem auto;

    @media screen and (min-width: 768px) {
        width: 40vw;
        margin: -1rem 4rem;
    }

    @media screen and (min-width: 1200px) {
        width: 35vw;
    }
`;

export const Title = styled.h3`
    margin-top: 2rem;
    font-size: 1.5rem;
`;