import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { Provider } from 'react-redux';
import configureStore  from 'redux-mock-store';

// Example test
describe('App tests', () => {
    const initialState = {};
    const mockStore = configureStore();
    let store, wrapper;

    beforeEach(()=>{
        store = mockStore(initialState)
    })
    it('renders a message', () => {
        render(<Provider store={store}><App/></Provider>)
        expect(screen.getByText('Menu preview')).toBeInTheDocument()
    })
})
