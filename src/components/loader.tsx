import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import {Box} from "@mui/material";

export default function LoadingPage(){
  return (
      <Box style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
        <CircularProgress />
      </Box>
  );
};

