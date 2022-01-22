import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UserContainer = styled(Link)`
    display: flex;
    align-items: center;
    height: 4rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
    text-decoration: none;
`;

export const Photo = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 25px;
    margin-left: 1rem;
    background-color: ${({ theme }) => theme.colors.black};
`;

export const UserName = styled.span`
    font-weight: 500;
    font-size: 1.2rem;
    margin-left: 1rem;
`;