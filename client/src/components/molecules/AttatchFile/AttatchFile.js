import { Wrapper } from './AttatchFile.style';

const AttaatchFile = ({ setPhoto }) => {
    const handlePassPhoto = (e) => {
        setPhoto(e.target.value);
    }
    
    return ( 
        <Wrapper>
            <h2>Choose photo</h2>
            <input type="text" placeholder="Paste url to image" onChange={(e) => handlePassPhoto(e)} />
        </Wrapper>
     );
}
 
export default AttaatchFile;