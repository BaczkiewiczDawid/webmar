import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40vw;
    height: 40vh;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 5vh;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: -1px 8px 27px -9px ${({ theme }) => theme.colors.black};
    border-radius: 15px;
`;

export const SaveBtn = styled.button`
    width: 90%;
    padding: .6rem 1.2rem;
    background-color: ${({ theme }) => theme.colors.blue};
    border: none;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
    margin-top: 1rem;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.darkBlue};
        transition: .5s;
    }
`;

export const Textarea = styled.textarea`
    width: 90%;
    height: 70%;
    resize: none;
    padding: .4rem;
`;