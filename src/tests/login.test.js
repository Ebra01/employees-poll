/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import LoginPage from '../components/Login';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

const mockStore = configureStore([]);

describe('Login Page', () => {
  it("should render a login page with Users selection dropdown", () => {

    const store = mockStore();

    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByTestId("users-selection")).toBeInTheDocument();
    expect(screen.getByTestId("login-btn")).toBeInTheDocument();
  })
});
