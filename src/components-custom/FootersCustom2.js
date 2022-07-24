import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  rootBox: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  footerNav: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginRight: 'auto',
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(0),

    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginLeft: 'auto',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    }
  },
  footerLink: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(2),
    }
  },
  copy: {
    textAlign: 'center'
  }
}
));

export default function Component(props) {
  const classes = useStyles();

  return (
<footer>
  <Container maxWidth="lg">
    <Box py={6}  display="flex" flexWrap="wrap" alignItems="center" className={classes.rootBox}>
      <Link href="#" variant="h5" color="inherit" underline="none">
        <img src="https://static.shuffle.dev/uploads/files/58/581ee14b5d1d626020267fc0754f9cea02f47f64/.png" alt="" width="120" />
      </Link>
      <Typography color="textSecondary" component="p" variant="body2" gutterBottom={false} className={classes.copy}>© 2022 Next Thing. All rights reserved.</Typography>
    </Box>
  </Container>
</footer>
  );
}