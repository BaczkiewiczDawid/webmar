import { Container, Textarea, SaveBtn } from './EditDescription.style';

const EditDescription = ({ handleDescription, updateUserDescription }) => {
    return ( 
        <Container>
                <Textarea onChange={(e) => updateUserDescription(e)} placeholder="Your description" />
                <SaveBtn onClick={handleDescription}>SAVE</SaveBtn>
        </Container>
     );
}
 
export default EditDescription;