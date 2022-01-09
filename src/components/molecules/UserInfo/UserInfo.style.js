import styled from 'styled-components';

export const UserInfoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;

    span {
        margin-left: 2.5rem;
        font-weight: 300;
        font-size: .8rem;
    }

    @media screen and (min-width: 1024px) {
        span {
            font-size: .9rem;
        }
    }
`;