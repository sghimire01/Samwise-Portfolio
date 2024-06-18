import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

function Home() {
  return (
    <Grid container spacing={2} padding={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Stock Symbol
            </Typography>
            <Typography variant="h5" component="h2">
              AAPL
            </Typography>
            <Typography color="textSecondary">
              Apple Inc.
            </Typography>
            <Typography variant="body2" component="p">
              Additional details here.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {/* Repeat Grid item for other stocks or data points */}
    </Grid>
  );
}

export default Home;
