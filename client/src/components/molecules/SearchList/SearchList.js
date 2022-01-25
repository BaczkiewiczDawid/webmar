import { useRef } from 'react';
import { SearchListWrapper, UsersListContainer } from './SearchList.style';
import User from 'components/atoms/User/User';
import useOutsideClick from 'hooks/useOutsideClick';

const SearchList = ({ filteredUsersList, isOpen, setIsOpen }) => {
    const ref = useRef();

    useOutsideClick(ref, () => {
        if (isOpen) {
            setIsOpen(false);
        }
    })

    return ( 
        <SearchListWrapper isOpen={isOpen} ref={ref} >
            <UsersListContainer>
                {filteredUsersList.map((user) => (
                    <User key={user.id} user={user} />
                ))}
            </UsersListContainer>
        </SearchListWrapper>
     );
}
 
export default SearchList;