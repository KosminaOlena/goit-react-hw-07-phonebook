import { ItemListContact } from "components/ItemListContact/ItemListContact"
import { List } from "./ListContacts.styled"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getContactsThunk } from "redux/thunk"
import { choiceVisibleArray } from "redux/selectors"

export const ListContacts = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getContactsThunk())
    },[dispatch])


    const visibleArray = useSelector(choiceVisibleArray);

    return(
        <List>
            {visibleArray.map(contact => (<ItemListContact 
            key={contact.id}
            id={contact.id} 
            name={contact.name} 
            phone={contact.phone}
            />
           ))}
        </List>
    )
}
