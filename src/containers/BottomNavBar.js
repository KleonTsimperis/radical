import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import AddTodoForm from './AddTodoForm';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';
import Snackbar from '../assets/Snackbar';
import Back from '../assets/backdrop/Backdrop';
import { bottomNavBarStyles } from './styles/bottomNavBarStyles';

const BottomNavBar = props => {
  const { classes } = props;
  return(
    <Fragment>
      {props.formState.createTodoForm && <AddTodoForm/>}
      {props.formState.createTodoForm && <Back open={props.formState.createTodoForm}  />}
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Button variant="fab"
                  color={props.formState.createTodoForm ? 'secondary' : 'primary'}
                  aria-label="Add"
                  className={classes.fabButton}
                  onClick={props.addTodo}
                  style={props.formState.createTodoForm ?{transform: 'rotate(45deg)', transition:'1s'}: null}
          >
            <AddIcon />
          </Button>
          <footer className={classes.footer}>2018 Radicalbit</footer>
        </Toolbar>
      </AppBar>
      <Snackbar message={'Submitted'}/>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  formState:state.mainReducer
});

BottomNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  formState: PropTypes.object.isRequired,
  addTodo: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { addTodo })(withStyles(bottomNavBarStyles)(BottomNavBar));
