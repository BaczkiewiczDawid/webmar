import Navigation from 'components/templates/Navigation/Navigation';
import img from 'assets/images/1.jpg';
import heart from 'assets/images/heart-icon.svg';
import styled from 'styled-components';

const PostsContainer = styled.section`
    margin-top: 3rem;
`;

const SinglePost = styled.article`
    display: flex;
    flex-direction: column;
    width: 90vw;
    margin: 0 auto;
    margin-top: ${({primary}) => primary ? '0' : '4rem'};
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;

    span {
        margin-left: 2.5rem;
        font-weight: 300;
        font-size: .8rem;
    }
`;

const Text = styled.p`
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.3rem;
`;

const Picture = styled.img`
    width: 100%;
    height: auto;
`;

const Likes = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;

    img {
        cursor: pointer;
    }

    span {
        margin-left: .8rem;
    }
`;

const Dashboard = () => {
    return ( 
        <>
            <Navigation />
            <PostsContainer>
                <SinglePost primary>
                    <Picture src={img} alt="img" />
                    <UserInfo>
                        <h2>Dawson</h2>
                        <span>In Las Vegas</span>
                    </UserInfo>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi error perferendis ad corrupti facilis nulla laboriosam iste culpa repellat!</Text>
                    <Likes>
                        <img src={heart} alt="heart" />
                        <span>17 People like it</span>
                    </Likes>
                </SinglePost>
                <SinglePost>
                    <Picture src={img} alt="img" />
                    <UserInfo>
                        <h2>Dawson</h2>
                        <span>In Las Vegas</span>
                    </UserInfo>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi error perferendis ad corrupti facilis nulla laboriosam iste culpa repellat!</Text>
                    <Likes>
                        <img src={heart} alt="heart" />
                        <span>17 People like it</span>
                    </Likes>
                </SinglePost>
            </PostsContainer>
        </>
     );
}
 
export default Dashboard;