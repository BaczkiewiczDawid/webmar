import Navigation from 'components/templates/Navigation/Navigation';
import SinglePost from 'components/organisms/SinglePost/SinglePost';
import { PostsContainer } from './Dashboard.style';
import posts from 'data/posts'

const Dashboard = () => {
    return ( 
        <>
            <Navigation />
            <PostsContainer>
                {posts.map((post) => <SinglePost name={post.name} location={post.location} img={post.img} description={post.description} />)}
                {/* <SinglePost name={'Dawson'} location={'Las Vegas'} img={img} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi error perferendis ad corrupti facilis nulla laboriosam iste culpa repellat!'} />
                <SinglePost name={'Karol'} location={'Warsaw'} img={img} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi error perferendis ad corrupti facilis nulla laboriosam iste culpa repellat!'} />
                <SinglePost name={'Karolina'} location={'Paris'} img={img} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi error perferendis ad corrupti facilis nulla laboriosam iste culpa repellat!'} /> */}
            </PostsContainer>
        </>
     );
}
 
export default Dashboard;