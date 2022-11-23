// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';
// import axios from 'axios'


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/This is Bottom/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react'
import { fireEvent, screen } from '@testing-library/react'

import App from './App';
import { renderWithProviders } from './utils/test-utils'

// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint
// export const handlers = [
//   rest.get('/api/user', (req, res, ctx) => {
//     return res(ctx.json('John Smith'), ctx.delay(150))
//   })
// ]

// const server = setupServer(...handlers)

// // Enable API mocking before tests.
// beforeAll(() => server.listen())

// // Reset any runtime request handlers we may add during the tests.
// afterEach(() => server.resetHandlers())

// // Disable API mocking after the tests are done.
// afterAll(() => server.close())

test('render app home', async () => {
  renderWithProviders(<App />)

  // should show no user initially, and not be fetching a user
  expect(screen.getByText(/Luyện nghe, phát âm chuẩn với 44 âm/i)).toBeInTheDocument()
})