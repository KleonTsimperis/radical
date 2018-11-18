import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SearchBar from '../containers/SearchBar';
import Users from '../containers/Users';
import { leftPaneStyles } from './styles/leftPaneStyles';

const LeftPane = props => {
  const { classes } = props;
  return(
    <div className={classes.root}>
      <Grid container justify='center' alignItems='center'>
        <Grid item xs={12} className={classes.search} container justify='center' alignItems='center'>
          <SearchBar item/>
        </Grid>
        <Grid item xs={12} container justify='center' alignItems='center'>
          <Users item/>
        </Grid>
      </Grid>
    </div>
  );
}

LeftPane.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(leftPaneStyles)(LeftPane);
