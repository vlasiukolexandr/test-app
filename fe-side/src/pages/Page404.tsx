import React, { useCallback } from 'react';
import {
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  CardActionArea
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const Page404 = () => {
  const history = useHistory();

  const goBackHandler = useCallback(() => {
    history.goBack();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container alignItems="center">
      <Grid item xs={12}>
        <Box p={5}>
          <Card>
            <CardContent>
              <span className="card-title">Page not found :(</span>
              <p>Maybe the page you are looking for has been removed, or you typed in the wrong URL</p>
            </CardContent>
            <CardActionArea>
              <Button
                fullWidth
                variant="contained"
                onClick={goBackHandler}
              >
                Go back
              </Button>
            </CardActionArea>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Page404;
