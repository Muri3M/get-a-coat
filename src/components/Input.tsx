import React from 'react';
import { Card, TextField, Typography } from '@mui/material';
import store from '../store';
import { setCity } from '../store/actionCreators';

let debounceTimer = null as unknown as ReturnType<typeof setTimeout>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleChangeDebounced(e: any) {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    store.dispatch(setCity(e.target.value));
  }, 500);
}

function Input() {
  return (
    <Card
      sx={{
        bgcolor: '#415A77',
        boxShadow: 'none',
        width: '100%',
        minHeight: '40%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        color="#E0E1DD"
        gutterBottom
        component="div"
      >
        Digite uma cidade para saber se deve levar seu casaco.
      </Typography>
      <TextField
        sx={{
          bgcolor: '#778DA9',
          borderRadius: 1,
          width: '70%',
        }}
        inputProps={{ style: { fontSize: 25, color: '#E0E1DD' } }}
        variant="outlined"
        onChange={handleChangeDebounced}
      />
    </Card>
  );
}

export default Input;
