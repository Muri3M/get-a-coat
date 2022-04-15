import React from 'react';
import { Container, Card } from '@mui/material';
import Temperature from './components/Temperature';
import Input from './components/Input';

function App() {
  return (
    <Container
      disableGutters
      sx={{
        bgcolor: '#0D1B2A',
        height: '100vh',
        maxWidth: '100vw !important',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card
        sx={{
          bgcolor: '#415A77',
          p: 4,
          width: '60%',
          height: '40%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Input />
        <Temperature />
      </Card>
    </Container>
  );
}

export default App;
