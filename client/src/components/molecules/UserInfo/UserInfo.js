import { UserInfoContainer } from './UserInfo.style';

const UserInfo = ({ user, location }) => {
    return ( 
        <UserInfoContainer>
            <h2>{user}</h2>
            <span>In {location}</span>
        </UserInfoContainer>
     );
}
 
export default UserInfo;