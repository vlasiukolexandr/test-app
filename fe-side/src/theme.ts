import {
  createMuiTheme,
} from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: "Inter",
  },
  overrides: {
    MuiTableCell: {
      sizeSmall: {
        '&:last-child': {
          paddingRight:  0
        }
      }
    }
  }
});

export {
  theme
};
