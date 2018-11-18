import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Notifications from '@material-ui/icons/Notifications';
import Calendar from '@material-ui/icons/CalendarToday';
import { navBarStyles } from './styles/navBarStyles';

const NavBar = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar className={classes.toolbar}>
          <Grid container className={classes.container}>
            <Grid item xs={3} className={classes.left} alignItems='center' container>
                <Grid item className={classes.radicalBit}> Radical<span style={{color:'grey'}}>bit</span> TDL</Grid>
                <Grid item> <Notifications className={classes.notificationsIcon}/> </Grid>
            </Grid>
            <Grid item xs={9} className={classes.center} container alignItems='center'>
              <Grid className={classes.myTasks}><strong style={{fontSize:'32px'}}>TD</strong> My Tasks</Grid>
              <Grid className={classes.today}>Today </Grid>
              <Grid><Calendar className={classes.calendar}/></Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(navBarStyles)(NavBar);
