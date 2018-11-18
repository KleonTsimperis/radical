import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {handleIsSelected} from '../actions/actions'
import { usersStyles } from './styles/usersStyles';

const Users = props => {
  const { classes } = props;
  return(
    <Grid container justify='center' alignItems='center' className={classes.usersContainer}>
      {props.userState.users.map( user =>
        <Fragment key={user.userId}>
          <Grid item xs={12}
                style={user.isSelected?{backgroundColor:'rgb(85, 220, 156)'}:{backgroundColor:'rgb(11, 45, 73)'}}
                className={classes.user} key={user.id}
                container justify='flex-start'
                alignItems='center'
                onClick={()=>props.handleIsSelected(user.userId)}>
            {user.name}
          </Grid>
        </Fragment>
      )}
    </Grid>
  );
}

const mapStateToProps = state => ({
  userState: state.mainReducer
});

Users.propTypes = {
  classes: PropTypes.object.isRequired,
  userState: PropTypes.object.isRequired,
  handleIsSelected: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { handleIsSelected })(withStyles(usersStyles)(Users));
