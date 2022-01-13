import styled from 'styled-components';

export const NewPostContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90vw;
    margin: 6rem auto 0;
    box-shadow: -1px 8px 27px -9px ${({ theme }) => theme.colors.black};
    border-radius: 10px;
    padding: .8rem 1.5rem;

    @media screen and (min-width: 768px) {
        width: 50vw;
        margin: none;
        margin-left: 2rem;
    }

    @media screen and (min-width: 1024px) {
        width: 45vw;
        margin: none;
        margin-left: 2.2rem;
    }
`;

export const ProfilePicture = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: ${({ theme }) => theme.colors.black};
`;

export const Input = styled.input`
    width: 70%;
    border: none;
`;