import { useEffect, useState } from 'react';
import Navigation from 'components/templates/Navigation/Navigation';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { Wrapper, Title, PostsWrapper } from './Profile.style';
import SinglePost from 'components/organisms/SinglePost/SinglePost';
import { useNavigate } from 'react-router-dom';
import UserInformation from 'components/organisms/UserInformation/UserInformation';

const Profile = ({ isAuthenticated }) => {
    const [currentUserData, setCurrentUserData] = useState([]);
    const [postsList, setPostsList] = useState([]);
    const [userDescription, setUserDescription] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const params = useParams();
    const currentUser = params.id
    
    const navigate = useNavigate();

    useEffect(() => {
        Axios.post('http://localhost:3001/api/profile', {
            currentUser: currentUser
        }).then((response) => {
            setCurrentUserData(response.data);
        })
    }, [currentUser]);
    useEffect(() => {
        if (!isAuthenticated.authenticated) {
            navigate('/login');
        }
    })

    useEffect(() => {
        Axios.post('http://localhost:3001/api/get-user-posts', {
            currentUser: currentUser
        }).then((response) => {
            setPostsList(response.data);
        })
    }, [currentUser, userDescription]);

    return ( 
        <>
            <Navigation />
            {currentUserData.length > 0 ?
                <Wrapper>
                    <UserInformation isOpen={isOpen} currentUserData={currentUserData} isAuthenticated={isAuthenticated} setIsOpen={setIsOpen} setCurrentUserData={setCurrentUserData} setUserDescription={setUserDescription} currentUser={currentUser} userDescription={userDescription} />
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