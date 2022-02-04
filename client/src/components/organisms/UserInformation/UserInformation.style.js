import styled from 'styled-components';

export const ProfilePicture = styled.div`
    width: 60px;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 100px;
`;

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    width: 95vw;

    @media screen and (min-width: 768px) {
        width: 40vw;
    }
`;

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    margin-top: 6rem;

    @media screen and (min-width: 768px) {
        margin-top: 2rem;
        margin-left: 1rem;
    }
`;

export const Username = styled.h1`
    margin-left: 1rem;
`;

export const Description = styled.p`
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 1rem;
    margin-top: 2rem;
    width: 60vw;

    @media screen and (min-width: 768px) {
        margin-left: 2rem;
    }
`;

export const Icon = styled.img`
    width: 1rem;
    height: auto;
    margin-left: 1rem;
`;