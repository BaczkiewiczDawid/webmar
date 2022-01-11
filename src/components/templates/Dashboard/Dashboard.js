import Navigation from 'components/templates/Navigation/Navigation';
import SinglePost from 'components/organisms/SinglePost/SinglePost';
import { PostsContainer } from './Dashboard.style';
import posts from 'data/posts'

const Dashboard = () => {
    return ( 
        <>
            <Navigation />
            <PostsContainer>
                {posts.map((post) => <SinglePost key={post.id} name={post.name} location={post.location} img={post.img} description={post.description} likes={post.likes} />)}
            </PostsContainer>
        </>
     );
}
 
export default Dashboard;