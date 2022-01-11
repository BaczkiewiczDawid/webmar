import { useState } from 'react';
import Navigation from 'components/templates/Navigation/Navigation';
import SinglePost from 'components/organisms/SinglePost/SinglePost';
import { PostsContainer } from './Dashboard.style';
import posts from 'data/posts'
import styled from 'styled-components';
import folder from 'assets/images/folder-icon.svg';

const NewPostContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90vw;
    margin: 6rem auto 0;
    box-shadow: -1px 8px 27px -9px ${({ theme }) => theme.colors.black};
    border-radius: 10px;
    padding: .8rem 1.5rem;

    @media screen and (min-width: 768px) {
        width: 40vw;
        margin: none;
        margin-left: 2rem;
    }

    @media screen and (min-width: 1024px) {
        width: 40vw;
        margin: none;
        margin-left: 2.2rem;
    }
`;

const ProfilePicture = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: ${({ theme }) => theme.colors.black};
`;

const Input = styled.input`
    width: 70%;
    border: none;
`;

const Form = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    height: 70vh;
    position: absolute;
    top: 5vh;
    left: 5vw;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: -1px 8px 27px -9px ${({ theme }) => theme.colors.black};
    margin: 0 auto;
    border-radius: 8px;

    @media screen and (min-width: 768px) {
        width: 50vw;
    }

    @media screen and (min-width: 1200px) {
        left: 2rem;
    }

    @media screen and (min-width: 1500px) {
        width: 40vw;
        height: 45vh;
    }
`;

const TextArea = styled.textarea`
    width: 90%;
    height: 30%;
    margin: 1rem auto;
    resize: none;
    border: ${({ theme }) => theme.colors.lightGray} solid 1px;
    padding: .5rem;

    @media screen and (min-width: 768px) {
        margin: none;
        margin-left: 1rem;
    }
`;

const Title = styled.h1`
    font-size: 1.5rem;
    margin-left: 1rem;
    margin-top: 1rem;
`;

const AttatchFile = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem;

    span {
        margin-left: 1rem;
    }
`;

const Button = styled.button`
    width: 90%;
    background-color: ${({ theme }) => theme.colors.blue};
    margin-top: 2rem;
    border: none;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.3rem;
    font-weight: 700;
    padding: .8rem 2rem;
    text-align: center;
    text-decoration: none;
    margin: 5rem auto 0 auto;
`;

const Dashboard = () => {
    const [isFormOpened, setIsFormOpened] = useState(false);

    const openForm = () => {
        if (!isFormOpened) {
            setIsFormOpened(!isFormOpened);
        }
    }

    const handlePublicPost = () => {
        setIsFormOpened(!isFormOpened);
    }

    return ( 
        <>
            <Navigation />
            <NewPostContainer>
                <ProfilePicture></ProfilePicture>
                <Input type="text" placeholder="Whats on your mind?" onClick={openForm}  />
            </NewPostContainer>
            {isFormOpened ?
                <Form>
                    <Title>Whats on your mind?</Title>
                    <TextArea placeholder="Type something..."></TextArea>
                    <AttatchFile>
                        <img src={folder} alt="attach file" />
                        <span>Upload photo</span>
                    </AttatchFile>
                    <Button onClick={handlePublicPost}>Public post</Button>
                </Form>
            : null}
            <PostsContainer>
                {posts.map((post) => <SinglePost key={post.id} name={post.name} location={post.location} img={post.img} description={post.description} likes={post.likes} />)}
            </PostsContainer>
        </>
     );
}
 
export default Dashboard;