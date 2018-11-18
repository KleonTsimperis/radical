import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { submitTodo, handleTextTerm } from '../actions/actions';
import { addToDoFormStyles } from './styles/addToDoFormStyles';

const CenteredGrid = props => {
  const { classes } = props;
  const isAddingTodo = props.formState.usersTodos.findIndex( item => item.isSelected === true)
  return (
    <div className={classes.root}>
      <Grid container spacing={24} justify='center' alignItems='center'>
        <Grid item >
          <Paper className={classes.paper}container='true'>
            <h3 item='true'>{props.formState.usersTodos[isAddingTodo].name} is adding a todo...</h3>
            <textarea item='true'
                      rows={7}
                      col={30}
                      className={classes.textarea}
                      value={props.formState.textTerm}
                      onChange={ e => props.handleTextTerm(e.target.value)}
                      />
            <div>{props.formState.formError?<h4 style={{color:'red'}}>Form can't be empty</h4> : null}</div>
            <button item='true'
                    className={classes.submitTodo}
                    onClick={()=>props.submitTodo(isAddingTodo)}>
                    Add Todo
            </button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  formState: PropTypes.object.isRequired,
  handleTextTerm: PropTypes.func.isRequired,
  submitTodo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  formState: state.mainReducer
});

export default connect(mapStateToProps, { submitTodo, handleTextTerm })(withStyles(addToDoFormStyles)(CenteredGrid));
