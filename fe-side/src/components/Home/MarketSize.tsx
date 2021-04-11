import React from 'react';
import {
  Box,
  makeStyles,
  Typography
} from '@material-ui/core';

import {
  numberFormatter
} from '../helpers/numberFormat';

const NUMBER = 10600000000;

const useStyles = makeStyles((theme) => ({
  container: {
    background: '#90C95C',
    height: 347,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
    fontWeight: 700,
    flexDirection: 'column',
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
  }
}), {
  name: "MarketSize"
})

const MarketSize = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography variant="h3">
        ${numberFormatter(NUMBER)}
      </Typography>
      <Typography className={classes.title}>
        Market size
      </Typography>
    </Box>
  )
};

export default MarketSize;

