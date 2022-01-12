import { UserInfoContainer } from './UserInfo.style';

const UserInfo = ({ name, location }) => {
    return ( 
        <UserInfoContainer>
            <h2>{name}</h2>
            <span>In {location}</span>
        </UserInfoContainer>
     );
}
 
export default UserInfo;