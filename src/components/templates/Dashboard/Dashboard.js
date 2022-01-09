import Navigation from 'components/templates/Navigation/Navigation';
import img from 'assets/images/1.jpg';
import heart from 'assets/images/heart-icon.svg';
import styled from 'styled-components';

const Dashboard = () => {
    return ( 
        <>
            <Navigation />
            <div>
                <img src={img} alt="img" />
                <div>
                    <h2>Dawson</h2>
                    <span>In Las Vegas</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi error perferendis ad corrupti facilis nulla laboriosam iste culpa repellat!</p>
                <div>
                    <img src={heart} alt="heart" />
                    <span>17 People like it</span>
                </div>
            </div>
        </>
     );
}
 
export default Dashboard;