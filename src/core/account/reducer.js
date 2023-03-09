import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    darkTheme: false,
    hobbies: localStorage.getItem('hobbies') ? localStorage.getItem('hobbies').split(',') : [],
    money: 0,
    userData: {
        name: 'Mati'
    }
};

const simpleState = key => (state, { payload }) => {
    state[key] = payload;
};

const localState = key => (state, { payload }) => {
    localStorage.setItem([key], payload.join(','));
    state[key] = payload;
};

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        setDarkTheme: simpleState('darkTheme'),
        setHobbies: localState('hobbies'),
        setUserData: simpleState('userData'),
        toggleDarkTheme: state => {
            state.darkTheme = !state.darkTheme
        }
    }
});

export const {
    setDarkTheme,
    setHobbies,
    setUserData,
    toggleDarkTheme
} = accountSlice.actions;

export default accountSlice.reducer;
