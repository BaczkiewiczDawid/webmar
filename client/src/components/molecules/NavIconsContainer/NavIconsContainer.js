import Icon from 'components/atoms/Icon/Icon';
import { NavIcons } from './NavIconsContainer.style';
import { Link } from 'react-router-dom';

const NavIconsContainer = ({ icons }) => {
    return ( 
        <NavIcons>
            {icons.map((icon) => (
                <Link to={`/${icon.path}`}>
                    <Icon key={icon.id} icon={icon} />
                </Link>
            ))}
        </NavIcons>
     );
}
 
export default NavIconsContainer;