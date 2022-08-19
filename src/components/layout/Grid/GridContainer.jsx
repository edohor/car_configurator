import React from 'react';
import Grid from '@mui/material/Grid';

export default function GridContainer(props) {
  const { children, ...rest } = props;

  return (
    <Grid container {...rest}>
      {children}
    </Grid>
  );
}
