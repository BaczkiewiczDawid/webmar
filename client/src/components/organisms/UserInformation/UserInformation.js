import EditDescription from 'components/molecules/EditDescription/EditDescription';
import { Header, UserInfo, ProfilePicture, Username, Description, Wrapper, Icon } from './UserInformation.style';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import edit from 'assets/images/edit.svg';


const UserInformation = ({ currentUserData, isAuthenticated, isOpen, setIsOpen, setCurrentUserData, setUserDescription, currentUser, userDescription }) => {
    const navigate = useNavigate();
    
    const handleDescription = () => {
        setIsOpen(!isOpen);

        if (isOpen) {
            Axios.post('http://localhost:3001/api/update-user-description', {
                currentUser: currentUser,
                userDescription: userDescription
            }).then((response) => {
                setCurrentUserData(response.data);
                navigate('/')
            })
        }
    }

    const updateUserDescription = (e) => {
        e.preventDefault();
        setUserDescription(e.target.value)
    }

    return ( 
        <Header>
            <UserInfo>
                <ProfilePicture></ProfilePicture>
                <Username>{currentUserData[0].name}</Username>
            </UserInfo>
            {currentUserData[0].id === isAuthenticated.loggedUser ?
                <Wrapper>
                    <Description>{currentUserData[0].description}</Description>
                    <Icon onClick={handleDescription} src={edit} alt="edit description" />
                </Wrapper>
                : 
                <Description>{currentUserData[0].description}</Description>
            }
            {isOpen ? <EditDescription handleDescription={handleDescription} updateUserDescription={updateUserDescription} /> : null}
        </Header>
     );
}
 
export default UserInformation;