import React, { FC, useEffect, useRef } from 'react';
import {
  Box,
  makeStyles,
  Typography
} from '@material-ui/core';

import Chart from 'chart.js/auto';
import { StatElement } from '../../types';

const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.palette.common.white,
    borderRadius: 8,
    padding: '20px 16px'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: '100%',
    color: '#202020',
  },
  img: {
    borderRadius: 8
  }
}), {
  name: 'Chart'
});

const RADIUS = 12;
const IMAGE_W_H = 24;

interface ChartProps {
  rows: StatElement[];
}

const ChartComponent: FC<ChartProps> = ({ rows }) => {
  const ref = useRef<any>();
  const bubbleChartStore = useRef<any>(null);
  const imagesContainer = useRef<any>();
  const classes = useStyles();

  useEffect(() => {
    const images: HTMLImageElement[] = [];

    rows.forEach(el => {
      const newElement = document.createElement('img');
      newElement.src = el.image;
      newElement.width = IMAGE_W_H;
      newElement.height = IMAGE_W_H;
      imagesContainer!.current.appendChild(newElement);
      images.push(newElement);
    });

    if (bubbleChartStore.current) {
      // If rerender, clear previous rendered canvas
      bubbleChartStore.current = bubbleChartStore.current.clear();
      bubbleChartStore.current = bubbleChartStore.current.destroy();
      imagesContainer!.current.innerHTML = '';
    }

    const bubbleChart = new Chart(ref!.current, {
      type: 'bubble',
      data: {
        datasets: [{
          data: rows.map(el => ({
            x: el.downloads,
            y: el.revenue,
            r: RADIUS
          }))
        }]
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: false,
          tooltip: {
            enabled: false
          }
        },
        elements: {
          point: {
            pointStyle: images,
          }
        },
        scales: {
          y: {
            title: {
              display: true,
              text: 'Downloads',
              align: 'end',
              color: '#BDBDBD'
            },
            ticks: {
              color: '#BDBDBD'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Revenue',
              align: 'end',
              color: '#BDBDBD'
            },
            ticks: {
              color: '#BDBDBD'
            }
          }
        }
      }
    });

    bubbleChartStore.current = bubbleChart;
  }, [rows]);

  return (
    <Box className={classes.container}>
      <Typography>Downloads & Revenue</Typography>
      <Box mt={2}>
        <canvas ref={ref} id="chart" width="100%" height="320"></canvas>
      </Box>
      <div ref={imagesContainer} />
    </Box>
  );
}

export default ChartComponent;
