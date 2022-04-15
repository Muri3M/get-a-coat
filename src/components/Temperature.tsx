import React from 'react';
import { useQuery } from '@apollo/client';
import { Card, Typography } from '@mui/material';

import { shallowEqual, useSelector } from 'react-redux';
import TEMPERATURE from '../querys';

interface getTemperatureData {
  getCityByName: {
    weather: {
      temperature: {
        actual: number;
      };
    };
  };
}

function Temperature() {
  const input: string = useSelector(
    (state: CityState) => state.city,
    shallowEqual
  );

  const name = input.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const { loading, error, data } = useQuery<getTemperatureData>(TEMPERATURE, {
    variables: { name },
  });

  const temperature = data?.getCityByName?.weather?.temperature?.actual;

  if (name === '') {
    return <div />;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        color="#f53b3b"
        component="div"
      >
        Acontecu um erro
      </Typography>
    );
  }

  if (temperature === undefined) {
    return (
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        color="#E0E1DD"
        component="div"
      >
        Cidade não encontrada
      </Typography>
    );
  }

  return (
    <Card
      sx={{
        bgcolor: '#415A77',
        boxShadow: 'none',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Typography
        variant="h2"
        fontWeight="bold"
        gutterBottom
        color={temperature > 293 ? '#DE6E4B' : '#778da9'}
        component="div"
      >
        {(temperature - 273.15).toFixed(2)}°
      </Typography>
      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom
        color="#E0E1DD"
        component="div"
      >
        {temperature > 293
          ? `Em ${name} esta quente não precisa de casaco`
          : `Em ${name} esta frio é melhor levar o casaco`}
      </Typography>
    </Card>
  );
}

export default Temperature;
