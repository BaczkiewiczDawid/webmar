import styled from 'styled-components'

export const PostContainer = styled.article`
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
`;

export const Text = styled.p`
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.3rem;

    @media screen and (min-width: 1024px) {
        font-size: 1rem;
        line-height: 1.5rem;
    }
`;

export const Picture = styled.img`
    width: 100%;
    height: auto;
`;

export const Likes = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;

    img {
        cursor: pointer;
    }

    span {
        margin-left: .8rem;
    }

    @media screen and (min-width: 1024px) {
        margin-top: 2rem;
    }
`;