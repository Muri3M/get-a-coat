import React from 'react';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import Temperature from '../../components/Temperature';
import TEMPERATURE from '../../querys';

jest.mock('react-redux', () => {
  return {
    useSelector() {
      return 'campinas';
    },
  };
});

const successMock = [
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

const undefinedMock = [
  {
    request: {
      query: TEMPERATURE,
      variables: {
        name: 'campinas',
      },
    },
    result: {
      data: {
        getCityByName: null,
      },
    },
  },
];

const failMock = [
  {
    request: {
      query: TEMPERATURE,
      variables: {
        name: 'campinas',
      },
    },
    error: new Error('An error occurred'),
  },
];

describe('Temperature', () => {
  it('should render loading', () => {
    const { getByText } = render(
      <MockedProvider mocks={successMock} addTypename={false}>
        <Temperature />
      </MockedProvider>
    );
    expect(getByText('Loading...'));
  });

  it('should render with temperature after loading', async () => {
    const { getByText } = render(
      <MockedProvider mocks={successMock} addTypename={false}>
        <Temperature />
      </MockedProvider>
    );
    await waitForElementToBeRemoved(() => getByText('Loading...'));
    expect(getByText('26.85°'));
  });

  it('should render with error if fails', async () => {
    const { getByText } = render(
      <MockedProvider mocks={failMock} addTypename={false}>
        <Temperature />
      </MockedProvider>
    );
    await waitForElementToBeRemoved(() => getByText('Loading...'));
    expect(getByText('Acontecu um erro'));
  });

  it('should render with city not found if city not found', async () => {
    const { getByText } = render(
      <MockedProvider mocks={undefinedMock} addTypename={false}>
        <Temperature />
      </MockedProvider>
    );
    await waitForElementToBeRemoved(() => getByText('Loading...'));
    expect(getByText('Cidade não encontrada'));
  });
});
