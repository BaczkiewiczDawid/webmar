import { useState, useEffect } from 'react';
import Navigation from 'components/templates/Navigation/Navigation';
import SinglePost from 'components/organisms/SinglePost/SinglePost';
import { PostsContainer } from './Dashboard.style';
import Axios from 'axios';
import NewPost from 'components/organisms/NewPost/NewPost';
import NewPostForm from 'components/organisms/NewPostForm/NewPostForm'

const Dashboard = () => {
    const [isFormOpened, setIsFormOpened] = useState(false);
    const [postsList, setPostsList] = useState([]);
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState('');

    useEffect(() => {
        Axios.get('http://localhost:3001/api/get').then((response) => {
            setPostsList(response.data)
        })
    }, [])

    return ( 
        <>
            <Navigation />
            <NewPost isFormOpened={isFormOpened} setIsFormOpened={setIsFormOpened} setDescription={setDescription} />
            {isFormOpened ?
                <NewPostForm description={description} setDescription={setDescription} setPhoto={setPhoto} setIsFormOpened={setIsFormOpened} isFormOpened={isFormOpened} photo={photo} />
            : null}
            <PostsContainer>
                {postsList.map((post) => <SinglePost key={post.id} id={post.id} user={post.user} location={post.location} img={post.img} description={post.description} likes={post.likes} />)}
            </PostsContainer>
        </>
     );
}
 
export default Dashboard;