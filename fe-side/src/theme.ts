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
    },
    MuiLink: {
      underlineHover: {
        cursor: 'pointer',
        textDecoration: 'underline',
        color: '#4F4F4F',
      }
    }
  }
});

export {
  theme
};
