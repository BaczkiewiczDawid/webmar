import styled from 'styled-components';

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    height: 70vh;
    position: absolute;
    top: 5vh;
    left: 5vw;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: -1px 8px 27px -9px ${({ theme }) => theme.colors.black};
    margin: 0 auto;
    border-radius: 8px;

    @media screen and (min-width: 768px) {
        width: 50vw;
    }

    @media screen and (min-width: 1200px) {
        left: 2rem;
    }

    @media screen and (min-width: 1500px) {
        width: 40vw;
        height: 45vh;
    }
`;

export const TextArea = styled.textarea`
    width: 90%;
    height: 30%;
    margin: 1rem auto;
    resize: none;
    border: ${({ theme }) => theme.colors.lightGray} solid 1px;
    padding: .5rem;

    @media screen and (min-width: 768px) {
        margin: none;
        margin-left: 1rem;
    }
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    margin-left: 1rem;
    margin-top: 1rem;
`;

export const Button = styled.button`
    width: 90%;
    background-color: ${({ theme }) => theme.colors.blue};
    margin-top: 2rem;
    border: none;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.3rem;
    font-weight: 700;
    padding: .8rem 2rem;
    text-align: center;
    text-decoration: none;
    margin: 5rem auto 0 auto;
    cursor: pointer;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const CloseButton = styled.button`
    background-color: transparent;
    border: none;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.black};
    margin-right: 1rem;
    cursor: pointer;
    font-size: 1rem;
`;