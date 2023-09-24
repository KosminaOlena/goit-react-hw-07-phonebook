import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { addContactsThunk, deleteContactsThunk, getContactsThunk } from './thunk';

const initialState = {
    contacts: {
      items: [],
      isLoading: false,
      error: null
    },
    filter: ""
  }

const handlePanding = (state) => {
    state.contacts.isLoading = true;
    state.contacts.error = null;
}
const handleFulfilledGet = (state,{ payload }) => {
    state.contacts.isLoading = false;
    state.contacts.items = payload;
    
}
const handleFulfilledAdd = (state,{ payload }) => {
    state.contacts.isLoading = false;
    const checkName = state.contacts.items.find(({name}) => name.toLowerCase() === payload.name.toLowerCase())
    if(checkName){
    alert(`${payload.name} is already in contacts`)
    return
    }
    state.contacts.items.push(payload);
    
}
const handleFulfilledDelete = (state,{ payload }) => {
    state.contacts.isLoading = false;
    state.contacts.items = state.contacts.items.filter(el => el.id !== payload.id)
    
}
const handleRejected = (state,{ payload }) => {
    state.contacts.isLoading = false;
    state.contacts.error = payload;
}
      
const contactsSlice = createSlice({
    name: 'phonebook',
    initialState,
    reducers:{
            filterContact:(state, action) =>{
            state.filter = action.payload;
        },
    },
    extraReducers:(builder) => {
        builder.addCase(getContactsThunk.fulfilled, handleFulfilledGet)
        .addCase(addContactsThunk.fulfilled, handleFulfilledAdd)
        .addCase(deleteContactsThunk.fulfilled, handleFulfilledDelete)
        .addMatcher(
            isAnyOf(
                getContactsThunk.pending,
                addContactsThunk.pending,
                deleteContactsThunk.pending
            ),handlePanding)
        .addMatcher(
            isAnyOf(
                getContactsThunk.rejected,
                addContactsThunk.rejected,
                deleteContactsThunk.rejected
            ),handleRejected)
    }
})

export const contactsReducer = contactsSlice.reducer;
export const {filterContact} = contactsSlice.actions;