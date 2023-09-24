import FormContact from './FormContact/FormContact'
import { Container } from './App.styled'
import { ListContacts } from './ListContacts/ListContacts'
import {Filter} from './Filter/Filter'

const App = () => {

    return(
      <Container>
        <h1>Phonebook</h1>
        <FormContact />
        <h2>Contacts</h2>
        <Filter/>
        <ListContacts/>
      </Container>
    )
  }

export default App