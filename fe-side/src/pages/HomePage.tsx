import React, { useState, useCallback, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import MarketSize from '../components/Home/MarketSize';
import Top5 from '../components/Home/Top5';
import ChartComponent from '../components/Home/Chart';
import Top from '../components/Home/Top';

import { getTopRanked } from '../services/axios/api';
import { StatElement } from '../types';

const HomePage = () => {
  const [state, setState] = useState<StatElement[]>([]);

  const getData = useCallback(() => {
    getTopRanked().then(data => setState(data));
  }, []);

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <MarketSize />
          </Grid>
          <Grid item xs={12} md={6}>
            <Top5 />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <ChartComponent rows={state} />
      </Grid>
      <Grid item xs={12}>
        <Top rows={state} />
      </Grid>
    </Grid>
  )
};

export default HomePage;
