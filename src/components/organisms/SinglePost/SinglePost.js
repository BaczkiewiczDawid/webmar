import { useState } from 'react';
import { PostContainer, Picture, Text, Likes } from './SinglePost.style';
import heart from 'assets/images/heart-icon.svg';
import UserInfo from 'components/molecules/UserInfo/UserInfo';

const SinglePost = ({ name, location, img, description, likes }) => {
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
            <Picture src={img} alt="img" />
            <UserInfo name={name} location={location} />
            <Text>{description}</Text>
            <Likes>
                <img src={heart} alt="heart" onClick={handleLike} />
                <span>{likesNumber} People like it</span>
            </Likes>
        </PostContainer>
     );
}
 
export default SinglePost;