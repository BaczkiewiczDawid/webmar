import { PostContainer, Picture, Text, Likes } from './SinglePost.style';
import heart from 'assets/images/heart-icon.svg';
import UserInfo from 'components/molecules/UserInfo/UserInfo';

const SinglePost = ({ name, location, img, description }) => {
    return ( 
        <PostContainer>
            <Picture src={img} alt="img" />
            <UserInfo name={name} location={location} />
            <Text>{description}</Text>
            <Likes>
                <img src={heart} alt="heart" />
                <span>17 People like it</span>
            </Likes>
        </PostContainer>
     );
}
 
export default SinglePost;