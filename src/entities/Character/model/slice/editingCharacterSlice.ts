import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { validateName } from '@/shared';

import { editingCharacterSchema } from '../types/editingCharacterSchema';

const initialState: editingCharacterSchema = {
  readOnly: true,
  error: null,
  id: null,
  name: '',
  location: '',
  status: ''
};

const editingCharacterSlice = createSlice({
  name: 'editingCharacter',
  initialState,
  reducers: {
    setCanselEdit(state) {
      state.readOnly = true;
    },
    setReadOnly(
      state,
      action: PayloadAction<{
        id: number;
        readOnly: boolean;
        name: string;
        location: string;
        status: string;
      }>
    ) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.location = action.payload.location;
      state.status = action.payload.status;
      state.readOnly = action.payload.readOnly;
      state.error = null;
    },
    setName(state, action: PayloadAction<string>) {
      state.error = validateName(action.payload);
      state.name = action.payload;
    },
    setLocation(state, action: PayloadAction<string>) {
      state.location = action.payload;
    },
    setStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
    setCancelEdit(state) {
      state.readOnly = true;
      state.location = '';
      state.location = '';
      state.status = '';
      state.error = null;
    }
  }
});

export const { actions: editingCharacterActions } = editingCharacterSlice;
export const { reducer: editingCharacterReducer } = editingCharacterSlice;
