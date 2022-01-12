import { useState } from 'react';
import { PostContainer, Picture, Text, Likes } from './SinglePost.style';
import heart from 'assets/images/heart-icon.svg';
import image from 'assets/images/1.jpg';
import UserInfo from 'components/molecules/UserInfo/UserInfo';

const SinglePost = ({ user, location, img, description, likes }) => {
    const [likesNumber, setLikesNumber] = useState(likes);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        if (!isLiked) {
            setLikesNumber(likesNumber + 1);
            setIsLiked(!isLiked);
        } else {
            setLikesNumber(likesNumber - 1);
            setIsLiked(!isLiked);
        }
    }

    return ( 
        <PostContainer>
            <Picture src={image} alt="img" />
            <UserInfo user={user} location={location} />
            <Text>{description}</Text>
            <Likes>
                <img src={heart} alt="heart" onClick={handleLike} />
                <span>{likesNumber} People like it</span>
            </Likes>
        </PostContainer>
     );
}
 
export default SinglePost;