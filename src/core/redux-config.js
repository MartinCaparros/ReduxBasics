import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './account/reducer';
import { createLogger } from 'redux-logger';

const logger = createLogger({
    collapsed: true,
    diff: true
});

export const store = configureStore({
    middleware: [logger],
    reducer: {
        account: accountReducer
    }
});
