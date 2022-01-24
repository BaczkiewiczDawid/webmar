import { useEffect, useState } from 'react';
import Navigation from 'components/templates/Navigation/Navigation';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ProfilePicture = styled.div`
    width: 60px;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 100px;
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    margin-top: 15vh;
    margin-left: 1rem;
`;

const Username = styled.h1`
    margin-left: 1rem;
`;

const Description = styled.p`
    margin-left: 1rem;
    margin-top: 2rem;
`;

const Profile = () => {
    const [currentUserData, setCurrentUserData] = useState([]);

    const params = useParams();
    const currentUser = params.id

    useEffect(() => {
            Axios.post('http://localhost:3001/api/profile', {
            currentUser: currentUser
        }).then((response) => {
            setCurrentUserData(response.data);
        })
    }, [currentUser])

    return ( 
        <>
            <Navigation />
            <Header>
                <ProfilePicture></ProfilePicture>
                <Username>{currentUserData[0].name}</Username>
            </Header>
            <Description>In future there will be user description</Description>
        </>
     );
}
 
export default Profile;