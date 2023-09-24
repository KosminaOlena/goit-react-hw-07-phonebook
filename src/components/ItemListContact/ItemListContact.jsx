import PropTypes from 'prop-types'
import { Item, Button } from "./itemListContact.styled"
import { useDispatch } from "react-redux"
import { deleteContactsThunk } from 'redux/thunk'

export const ItemListContact = ({id, name, phone}) => {
    const dispatch = useDispatch()
    const handleDelete = id => dispatch(deleteContactsThunk(id))
    return(
        <Item>
                {name}: <br />{phone}
                <Button type='button' onClick={() => handleDelete(id)}>Delete</Button>
        </Item>
    )
}

ItemListContact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired}