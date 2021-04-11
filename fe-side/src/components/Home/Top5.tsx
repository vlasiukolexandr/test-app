import React, { useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Typography,
} from '@material-ui/core';

import { getStats } from '../../services/axios/api';
import { StatElement } from '../../types';

const useStyles = makeStyles((theme) => ({
  table: {
    maxWidth: 'calc(100% - 32px)',
    margin: 16,
  },
  title: {
    fontWeight: 700,
    fontSize: 16,
    lineHeight: '100%',
    color: '#202020',
    padding: '20px 14px 10px'
  },
  container: {
    borderRadius: 8,
    background: theme.palette.common.white,
    height: 347,
  },
  bodyRow: {
    height: 51,
    '&:last-child': {
      '& td': {
        border: 'none'
      }
    }
  },
  cellNum: {
    minWidth: 0,
    width: 10,
    padding: '6px 8px 6px 0',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 13,
    color: '#828282',
    lineHeight: '100%'
  },
  cellName: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#828282',
    lineHeight: '100%',
  },
  img: {
    borderRadius: 8,
    width: 28,
    height: 28,
    marginRight: 12,
  },
  cellDownloads: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#4F4F4F',
    lineHeight: '100%'
  },
  headerCell: {
    border: 'none',
    color: '#828282',
    fontWeight: 500,
    fontSize: 11,
    lineHeight: '100%',
    paddingLeft: 0,
    paddingRight: 0
  }
}), {
  name: 'Top5'
});

const Top5 = () => {
  const classes = useStyles();
  const [state, setState] = useState<StatElement[]>([]);

  const getData = useCallback(() => {
    getStats().then(data => setState(data));
  }, []);

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>Top 5</Typography>
      <TableContainer>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell className={clsx(classes.headerCell)} align="left" colSpan={2}>App name</TableCell>
              <TableCell className={clsx(classes.headerCell)} align="right">Downloads</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.map((row, k) => (
              <TableRow key={row.name} className={classes.bodyRow}>
                <TableCell className={classes.cellNum}>
                  {k + 1}
                </TableCell>
                <TableCell className={classes.cellName}>
                  <Box display="flex" alignItems="center">
                    <img src={row.image} className={classes.img} alt={row.name} />
                    {row.name}
                  </Box>
                </TableCell>
                <TableCell className={classes.cellDownloads} align="right">{row.downloads}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default Top5;
