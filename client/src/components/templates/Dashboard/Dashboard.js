import { useState, useEffect } from 'react';
import Navigation from 'components/templates/Navigation/Navigation';
import SinglePost from 'components/organisms/SinglePost/SinglePost';
import { PostsContainer } from './Dashboard.style';
import Axios from 'axios';
import NewPost from 'components/organisms/NewPost/NewPost';
import NewPostForm from 'components/organisms/NewPostForm/NewPostForm'
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ isAuthenticated }) => {
    const [isFormOpened, setIsFormOpened] = useState(false);
    const [postsList, setPostsList] = useState([]);
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated.authenticated) {
            navigate('/login');
        }
    })

    useEffect(() => {
        Axios.get('http://localhost:3001/api/get').then((response) => {
            setPostsList(response.data)
        })
    }, [isFormOpened])

    return ( 
        <>
            <Navigation />
            <NewPost isFormOpened={isFormOpened} setIsFormOpened={setIsFormOpened} setDescription={setDescription} />
            {isFormOpened ?
                <NewPostForm description={description} setDescription={setDescription} setPhoto={setPhoto} setIsFormOpened={setIsFormOpened} isFormOpened={isFormOpened} photo={photo} isAuthenticated={isAuthenticated} />
            : null}
            <PostsContainer>
                {postsList.map((post) => <SinglePost key={post.id} id={post.id} user={post.user} location={post.location} img={post.image} description={post.description} likes={post.likes} />)}
            </PostsContainer>
        </>
     );
}
 
export default Dashboard;