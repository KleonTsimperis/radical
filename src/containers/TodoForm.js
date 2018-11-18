import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { handleTextTerm, formSubmit } from '../actions/actions';
import { todoFormStyles } from './styles/todoFormStyles';

const TodoForm = props => {
  const formIsDisplaying = props.todoFormState.usersTodos.some( item => item.isToggling );
  const { classes }      = props;
  return (
    <div className={classes.root}>
      <Grid container justify='center' alignItems='center' style={formIsDisplaying ? {padding:'20px', paddingBottom:'40px'}: null}>
        {props.todoFormState.usersTodos.filter(item => item.isToggling ===true).map(item => {
          return(
            <Fragment key={item.id}>
              <Grid item xs={12}>
                <label className={classes.label}>Title</label>
                <div className={classes.title}>{item.title}</div>
              </Grid>
              <Grid item xs={12} container justify='flex-start' alignItems='flex-start' direction='column'>
                <div className={classes.comment}>Comment</div>
                <div style={item.hasOwnProperty('comment') ? {marginBottom:'2rem'}:{marginBottom:0}}>{item.comment}</div>
                <textarea rows='5'
                          value={props.todoFormState.textTerm}
                          onChange={ e => props.handleTextTerm(e.target.value)}
                          disabled={!item.hasOwnProperty('comment')}
                          placeholder={!item.hasOwnProperty('comment') ? 'This Todo is unassigned and thus appear to all users. The user that will click the checkbox first will claim it and from that point, it will only appear as his Todo' : null}
                          style={!item.hasOwnProperty('comment') ? {border:'1px solid red', width:'100%'}:{width:'100%'}}
                 />
               <div>{props.todoFormState.formError?<h4 style={{color:'red'}}>Form can't be empty</h4> : null}</div>
              </Grid>
              <Grid container>
                <button item='true'
                        style={!item.hasOwnProperty('comment')?{display:'none'}:null}
                        xs={12}
                        className={classes.button}
                        onClick={ e => props.formSubmit(item.id, e)}>{item.hasOwnProperty('comment') ? 'Save!' : 'Done!'}
                </button>
              </Grid>
            </Fragment>
          )})}
      </Grid>

    </div>
  );
}

const mapStateToProps = state => ({
  todoFormState: state.mainReducer
});

TodoForm.propTypes = {
  classes: PropTypes.object.isRequired,
  todoFormState: PropTypes.object.isRequired,
  handleTextTerm: PropTypes.func.isRequired,
  formSubmit: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { handleTextTerm, formSubmit })(withStyles(todoFormStyles)(TodoForm));
