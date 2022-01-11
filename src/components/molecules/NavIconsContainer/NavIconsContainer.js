import Icon from 'components/atoms/Icon/Icon';
import { NavIcons } from './NavIconsContainer.style';

const NavIconsContainer = ({ icons }) => {
    return ( 
        <NavIcons>
            {icons.map((icon) => (
                <Icon key={icon.id} icon={icon} />
            ))}
        </NavIcons>
     );
}
 
export default NavIconsContainer;