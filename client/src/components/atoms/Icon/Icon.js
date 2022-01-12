import { StyledIcon } from './Icon.style'

const Icon = ({ icon }) => {

    return ( 
        <StyledIcon src={icon.src} alt={icon.alt} />
    );
}
 
export default Icon;