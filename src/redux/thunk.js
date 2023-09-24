import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDeleteContact, fetchGetContact, fetchPostContact } from "services/api";

export const getContactsThunk = createAsyncThunk('contacts/get', 
    async (_, thunkApi) => {
        try {
          const contacts = await fetchGetContact();
          return contacts;
        } catch (error) {
          return thunkApi.rejectWithValue(error.message);
        }
      }
)

export const addContactsThunk = createAsyncThunk('contacts/add', 
    async (data, thunkApi) => {
        try {
          const contacts = await fetchPostContact(data);
          return contacts;
        } catch (error) {
          return thunkApi.rejectWithValue(error.message);
        }
      }
)

export const deleteContactsThunk = createAsyncThunk('contacts/delete', 
    async (id, thunkApi) => {
        try {
          const contacts = await fetchDeleteContact(id);
          return contacts;
        } catch (error) {
          return thunkApi.rejectWithValue(error.message);
        }
      }
)