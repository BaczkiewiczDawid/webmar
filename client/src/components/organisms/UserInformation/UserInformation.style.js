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
`;

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
`;

export const Username = styled.h1`
    margin-left: 1rem;
`;

export const Description = styled.p`
    margin-left: 1rem;
    margin-top: 2rem;
`;