import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from "./selectors/expenses";
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { addExpense} from './actions/expenses';
import { setTextFilter} from "./actions/filters";

const store = configureStore();


const expenseOne = store.dispatch(addExpense({ description: 'Water Bill', amount: 4500 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 1500 }));
const expenseThree = store.dispatch(addExpense({ description: 'rent', amount: 109500 }));
// store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
