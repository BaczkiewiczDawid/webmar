import { NewPostContainer, ProfilePicture, Input } from "./NewPost.style";

const NewPost = ({ isFormOpened, setIsFormOpened, setDescription }) => {
    const openForm = () => {
        if (!isFormOpened) {
            setIsFormOpened(!isFormOpened);
            setDescription('');
        }
    }

    return ( 
        <NewPostContainer>
            <ProfilePicture></ProfilePicture>
            <Input type="text" placeholder="Whats on your mind?" onClick={openForm}  />
        </NewPostContainer>
     );
}
 
export default NewPost;
