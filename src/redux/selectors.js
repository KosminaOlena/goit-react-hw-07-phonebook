import { createSelector } from "@reduxjs/toolkit"

export const selectorContacts = state => state.contact.contacts.items
export const selectorIsLoading = state => state.contact.contacts.isLoading
export const selectorError = state => state.contact.contacts.error
export const selectorFilter = state => state.contact.filter

export const choiceVisibleArray = createSelector(
    [selectorContacts, selectorFilter],
    (contacts, filter) => {
        if(filter !== ''){
            return contacts.filter(contact =>
                contact.name.toLowerCase().includes(filter.toLowerCase())
              ); 
        }
        return contacts;
    }

)
