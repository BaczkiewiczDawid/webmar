import { Nav } from './Navigation.style';
import NavIconsContainer from 'components/molecules/NavIconsContainer/NavIconsContainer';
import Logo from 'components/atoms/Logo/Logo';
import icons from 'data/icons';

const Navigation = () => {
    return ( 
        <Nav>
            <Logo />
            <NavIconsContainer icons={icons} />
        </Nav>
     );
}
 
export default Navigation;