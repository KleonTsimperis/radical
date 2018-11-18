import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TodoForm from './TodoForm';
import { connect } from 'react-redux';
import Spinner from '../assets/spinner/spinner';
import Checkbox from '@material-ui/core/Checkbox';
import CardGiftcard from '@material-ui/icons/CardGiftcard';
import { isEditingUser, handleUserEdits } from '../actions/actions';
import TextField from '@material-ui/core/TextField';
import { rightPaneStyles } from './styles/rightPaneStyles';

const RightPane = props => {
  if(props.rightPaneState.usersTodos.length === 0 ){
    return <Spinner/>
  }

  const user        = props.rightPaneState.usersTodos.findIndex(user => user.isSelected === true);
  const completed   = props.rightPaneState.usersTodos.reduce((initialValue, accumulator) => accumulator.completed? initialValue + 1 : initialValue, 0);
  const tbd         = props.rightPaneState.usersTodos.reduce((initialValue, accumulator) => !accumulator.completed && accumulator.hasOwnProperty('comment')? initialValue + 1 : initialValue, 0);
  const unassigned  = props.rightPaneState.usersTodos.reduce((initialValue, accumulator) => !accumulator.hasOwnProperty('comment') ? initialValue + 1 : initialValue, 0);
  const { classes } = props;
  var helper        = 0;

  if ( Math.floor((completed / props.rightPaneState.usersTodos.length)*100) + Math.floor((tbd / props.rightPaneState.usersTodos.length)*100) + Math.floor((unassigned / props.rightPaneState.usersTodos.length)*100) !== 100  ){
    helper = 100 - (Math.floor((completed / props.rightPaneState.usersTodos.length)*100) + Math.floor((tbd / props.rightPaneState.usersTodos.length)*100) + Math.floor((unassigned / props.rightPaneState.usersTodos.length)*100))
  }

  return(
    <div className={classes.root}>
      <Grid container className={classes.container} justify='center' alignItems='center'>
        <TodoForm />
        <Grid item xs={12} container justify='center' alignItems='center'>

          <Grid item md={4} sm={12} className={classes.unassigned} direction='column' container justify='center' alignItems='center'>
            <CardGiftcard className={classes.gift}/>
            <Grid item>{Math.floor((unassigned / props.rightPaneState.usersTodos.length)*100)}%</Grid>
            <Grid item style={{fontSize:'.8rem'}}>{unassigned} Unassigned </Grid>
          </Grid>
          <Grid item md={4} sm={12} className={classes.tbd} direction='column' container justify='center' alignItems='center'>
            <Checkbox disabled className={classes.checkBox}/>
            <Grid item>{Math.floor((tbd / props.rightPaneState.usersTodos.length)*100) + helper}%</Grid>
            <Grid item style={{fontSize:'.8rem'}}>{tbd} TBD </Grid>
          </Grid>
          <Grid item md={4} sm={12} className={classes.completed} container direction='column' justify='center' alignItems='center'>
            <Checkbox disabled checked className={classes.checkBox}/>
            <Grid item>{Math.floor((completed / props.rightPaneState.usersTodos.length)*100)}%</Grid>
            <Grid item style={{fontSize:'.8rem'}}>{completed} Done</Grid>
          </Grid>

        </Grid>

        <Grid item container className={classes.userInfo}>
          <Grid item xs={12} container justify='center' alignItems='center'>
           <img src={props.rightPaneState.usersTodos[user].image} alt={props.rightPaneState.usersTodos[user].name}  className={classes.image}/>
          </Grid>
          <Grid item xs={12} container justify='center' style={{color:'white!important'}}>
            {
              props.rightPaneState.usersTodos[user].isEditingUser ?
              <TextField
                id="outlined-name"
                label="Name"
                value={props.rightPaneState.usersTodos[user].name}
                onChange={ e => props.handleUserEdits(e.target.value,user)}
                margin="normal"
                variant="outlined"
                InputProps={{
                  className: classes.input
                }}
                InputLabelProps={{
                  className: classes.input
                }}
              />
                :
              <h2>{props.rightPaneState.usersTodos[user].name}</h2>
            }
          </Grid>
          <Grid item xs={12} container justify='center' className={classes.info}>{props.rightPaneState.usersTodos[user].nick}</Grid>
          <Grid item xs={12} container justify='center' className={classes.info}>{props.rightPaneState.usersTodos[user].email}</Grid>
          <Grid item xs={12} container justify='center' className={classes.info}>{props.rightPaneState.usersTodos[user].phone}</Grid>
          <Grid item xs={12} container justify='center' style={{marginTop:'2rem'}}><button className={classes.button} onClick={()=>props.isEditingUser()}>{props.rightPaneState.usersTodos[user].isEditingUser ? 'Save':'Edit'}</button></Grid>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = state => ({
  rightPaneState: state.mainReducer
});

RightPane.propTypes = {
  classes: PropTypes.object.isRequired,
  rightPaneState: PropTypes.object.isRequired,
  handleUserEdits: PropTypes.func.isRequired
};


export default connect(mapStateToProps, {isEditingUser,handleUserEdits})(withStyles(rightPaneStyles)(RightPane));
