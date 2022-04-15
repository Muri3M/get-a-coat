import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import TEMPERATURE from '../querys';
import App from '../App';

const mocks = [
  {
    request: {
      query: TEMPERATURE,
      variables: {
        name: 'campinas',
      },
    },
    result: {
      data: {
        getCityByName: { weather: { temperature: { actual: 300 } } },
      },
    },
  },
];

jest.mock('react-redux', () => {
  return {
    useSelector: jest.fn(),
  };
});

describe('App', () => {
  it('should render', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    );
  });
});
