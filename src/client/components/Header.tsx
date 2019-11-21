import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link as ReactLink } from 'react-router-dom';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography>
        <Button to="/" component={ReactLink}>
          Page 1
        </Button>
        <Button to="/another_page" component={ReactLink}>
          Page 2
        </Button>
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
