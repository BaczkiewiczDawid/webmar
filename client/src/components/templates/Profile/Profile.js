import { useEffect, useState } from 'react';
import Navigation from 'components/templates/Navigation/Navigation';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import SinglePost from 'components/organisms/SinglePost/SinglePost';

const ProfilePicture = styled.div`
    width: 60px;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 100px;
`;

const Header = styled.header`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
`;

const Username = styled.h1`
    margin-left: 1rem;
`;

const Description = styled.p`
    margin-left: 1rem;
    margin-top: 2rem;
`;

const Wrapper = styled.div`
    @media screen and (min-width: 768px) {
        margin-top: 15vh;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
`;

const PostsWrapper = styled.article`
    width: 90vw;
    margin: 3rem auto;

    @media screen and (min-width: 768px) {
        width: 40vw;
        margin: -1rem 4rem;
    }

    @media screen and (min-width: 1200px) {
        width: 35vw;
    }
`;

const Title = styled.h3`
    margin-top: 2rem;
    font-size: 1.5rem;
`;

const Profile = () => {
    const [currentUserData, setCurrentUserData] = useState([]);
    const [postsList, setPostsList] = useState([]);
    const params = useParams();
    const currentUser = params.id

    useEffect(() => {
        Axios.post('http://localhost:3001/api/profile', {
            currentUser: currentUser
        }).then((response) => {
            setCurrentUserData(response.data);
        })
    }, [currentUser]);

    useEffect(() => {
        Axios.post('http://localhost:3001/api/get-user-posts', {
            currentUser: currentUser
        }).then((response) => {
            setPostsList(response.data);
        })
    }, [currentUser]);

    return ( 
        <>
            <Navigation />
            {currentUserData.length > 0 ?
                <Wrapper>
                    <Header>
                        <UserInfo>
                            <ProfilePicture></ProfilePicture>
                            <Username>{currentUserData[0].name}</Username>
                        </UserInfo>
                        <Description>In future there will be user description</Description>
                    </Header>

                    <PostsWrapper>
                        <Title>Recent Activity</Title>
                        {postsList.length > 0 ? 
                            postsList.map((post) => <SinglePost key={Math.floor(Math.random() * 1000)} id={post.id} user={post.name} location={post.location} img={post.image} description={post.description} likes={post.likes} />)
                        : <span>This user haven't posted yet</span>}
                    </PostsWrapper>
                </Wrapper>
            : 
                null
            }
        </>
     );
}
 
export default Profile;