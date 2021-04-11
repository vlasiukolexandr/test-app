import React, { FC, useCallback, useMemo } from 'react';
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
  Link
} from '@material-ui/core';

import { StatElement } from '../../types';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: '100%',
  },
  title: {
    fontWeight: 700,
    fontSize: 16,
    lineHeight: '100%',
    color: '#202020',
    padding: '20px 14px 10px'
  },
  tableContainer: {
    overflow: 'initial'
  },
  container: {
    borderRadius: 8,
    background: theme.palette.common.white,
    width: 'max-content',
    minWidth: '100%',
  },
  bodyRow: {
    height: 51,
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
  cell: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#828282',
    lineHeight: '100%',
    border: '1px solid #BDBDBD'
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
  },
  footer: {
    background: '#F2F2F2',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  footerText: {
    fontWeight: 500,
    fontSize: 13,
    lineHeight: '100%',
    color: '#BDBDBD',
    padding: '5px 16px'
  }
}), {
  name: 'Top5'
});

interface TopProps {
  rows: StatElement[];
}

const Top: FC<TopProps> = ({ rows }) => {
  const classes = useStyles();
  const history = useHistory();

  const footerText = useMemo(() => {
    const number = `0${rows.length}`.slice(-2);
    const text = rows.length > 1 ? 'Rows' : 'Row';
    return `${number} ${text}`;
  }, [rows]);

  const goTo = useCallback((to: string) => () => { window.location.href = to }, []);

  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>Top app performance</Typography>
      <TableContainer className={classes.tableContainer}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell className={clsx(classes.headerCell)} align="left"></TableCell>
              <TableCell className={clsx(classes.headerCell)} align="left">Image</TableCell>
              <TableCell className={clsx(classes.headerCell)} align="left">App Name</TableCell>
              <TableCell className={clsx(classes.headerCell)} align="left">Rating</TableCell>
              <TableCell className={clsx(classes.headerCell)} align="left">Downloads</TableCell>
              <TableCell className={clsx(classes.headerCell)} align="left">Revenue</TableCell>
              <TableCell className={clsx(classes.headerCell)} align="left">Position</TableCell>
              <TableCell className={clsx(classes.headerCell)} align="left">Released</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, k) => (
              <TableRow key={row.name} className={classes.bodyRow}>
                <TableCell className={classes.cell}>
                  {k + 1}
                </TableCell>
                <TableCell className={classes.cell}>
                  <img src={row.image} className={classes.img} alt={row.name} />
                </TableCell>
                <TableCell className={classes.cell}>
                  <Link component="a" variant="inherit" onClick={goTo(row.url)}>
                    {row.name}
                  </Link>
                </TableCell>
                <TableCell className={classes.cell} align="left">{row.rating}</TableCell>
                <TableCell className={classes.cell} align="left">{row.downloads}</TableCell>
                <TableCell className={classes.cell} align="left">{row.revenue}</TableCell>
                <TableCell className={classes.cell} align="left">{row.pos}</TableCell>
                <TableCell className={classes.cell} align="left">{row.released}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box className={classes.footer}>
        <Typography className={classes.footerText}>{footerText}</Typography>
      </Box>
    </Box>
  )
}

export default Top;
