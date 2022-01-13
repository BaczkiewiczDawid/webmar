import { Form, Wrapper, Title, CloseButton, TextArea, Button } from './NewPostForm.style';
import AttatchFile from 'components/molecules/AttatchFile/AttatchFile';
import Axios from 'axios';

const NewPostForm = ({ setDescription, setPhoto, setIsFormOpened, isFormOpened, description, photo }) => {
    const handleGetDescription = (e) => {
        setDescription(e.target.value);
    }

    const closeForm = () => {
        setIsFormOpened(false);
    }

    const handlePublicPost = (e) => {
        e.preventDefault();
        setIsFormOpened(!isFormOpened);

        const newPost = {
            description: description,
            img: photo,
            likes: 0,
            location: 'paris',
            user: 'Dawson',
        }

        Axios.post('http://localhost:3001/api/new', {
            newPost: newPost
        }).then(() => {
            console.log('new post added')
        })
    }
    return ( 
        <Form>
            <Wrapper>
                <Title>Whats on your mind?</Title>
                <CloseButton onClick={closeForm}>X</CloseButton>
            </Wrapper>
            <TextArea placeholder="Type something..." onChange={(e) => handleGetDescription(e)}></TextArea>
            <AttatchFile setPhoto={setPhoto} />
            <Button onClick={(e) => handlePublicPost(e)}>Public post</Button>
        </Form>
     );
}
 
export default NewPostForm;