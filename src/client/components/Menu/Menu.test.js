import React from 'react'
import { render, screen } from '@testing-library/react'
import { Menu } from './Menu'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';


// Example test
describe('App tests', () => {
    const initialState = {};
    const mockStore = configureStore();
    let store, wrapper;

    const menus = {
        menus: [
            {
                id: 1001,
                name: 'Kale Caesar Pasta, Turmeric Satay Broccoli & Lemon Cashew Greens',
                dietaries: ['v', 've', 'df', 'gf', 'n!'],
            },
            {
                id: 1002,
                name: 'Hake & Smoky Chickpeas, Brown Rice & Quinoa, Roasted Roots',
                dietaries: ['gf', 'df', 'rsf'],
            }]
    };

    beforeEach(() => {
        store = mockStore(initialState)
    })
    it('renders a message', () => {
        render(<Provider store={store}><Menu menuList={menus} /></Provider>)
        expect(screen.getByTestId('Kale Caesar Pasta, Turmeric Satay Broccoli & Lemon Cashew Greens')).toBeInTheDocument()
    })
})
