import { useState } from 'react'
import { Form, Label, Input, Button } from "./FormContact.styled"
import { useDispatch } from "react-redux"
import { addContactsThunk } from 'redux/thunk'

const FormContact = () => {

const dispatch = useDispatch()
    
const [name, setName] = useState('')
const [phone, setPhone] = useState('')

    const handleChange = ({target}) => {

        switch(target.name){

            case 'name': setName(target.value);
            break;

            case 'phone': setPhone(target.value);
            break;

            default: return;
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addContactsThunk({name, phone}))
        setName('');
        setPhone('');

    }

        return(
            <Form onSubmit={handleSubmit}>
            <Label htmlFor="777">Name</Label>
            <Input
                type="text"
                autoComplete='on'
                id='777'
                name="name"
                placeholder="name"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={handleChange}
                value={name}
            />
            <Label htmlFor="888">Number</Label>
            <Input
                type="tel"
                autoComplete='on'
                id='888'
                name="phone"
                placeholder="number"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={handleChange}
                value={phone}
            />
            <Button type='submit'>Add contact</Button>
        </Form>
        )
    }

export default FormContact

