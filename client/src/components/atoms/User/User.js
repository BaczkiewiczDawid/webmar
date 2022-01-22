import { UserContainer, Photo, UserName } from './User.style'

const User = ({ user }) => {
    return ( 
        <UserContainer to={`user/${user.id}`} key={user.id}>
            <Photo></Photo>
            <UserName>{user.name}</UserName>
        </UserContainer>
     );
}
 
export default User;