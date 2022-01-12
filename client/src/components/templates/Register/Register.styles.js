import styled from 'styled-components';

export const Wrapper = styled.div`
    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80vw;
        max-width: 94rem;
        margin: auto;
        margin-top: 15%;
        transform: translateY(-15%);
    }
`;

export const Header = styled.header`
    width: 90vw;
    margin: 2rem auto;

    @media screen and (min-width: 768px) {
        width: 30vw;

        h1 {
            font-size: 3rem;
        }
    }
`;

export const BasicInfo = styled.p`
    margin-top: 1rem;
    line-height: 1.3rem;
    letter-spacing: .04rem;

    @media screen and (min-width: 768px) {
         font-size: 1.3rem;
         line-height: 1.6rem;
         letter-spacing: .06rem;
    }
`;

export const FormWrapper = styled.section`
    width: 90vw;
    margin: 0 auto;
    min-height: 45vh;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: -1px 8px 27px -9px ${({ theme }) => theme.colors.black};

    @media screen and (min-width: 768px) {
        width: 40vw;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 2rem 0;
`;

export const Input = styled.input`
    width: 100%;
    background-color: transparent;
    box-shadow: none;
    color: ${({ theme }) => theme.colors.lightGray};
    border: ${({ theme }) => theme.colors.lightGray} 1px;
    border-style: solid;
    border-radius: .5rem;
    margin-top: 1rem;
    padding: .8rem 1rem;
`;

export const Button = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.blue};
    margin-top: 2rem;
    border: none;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.2rem;
    font-weight: 700;
    padding: .8rem 2rem;
    border-radius: .5rem;
`;

export const Switch = styled.span`
    font-size: .85rem;
    text-align: center;
    margin-top: 1rem;

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.blue};
    }
`;