import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import CardGiftcard from '@material-ui/icons/CardGiftcard';
import { toggleTodo, completedWithoutComment } from '../actions/actions';
import { centerPaneStyles } from './styles/centerPaneStyles';

const filterOut = value => item => item.title.toLowerCase().includes(value);

const CenterPane = props => {
  const { classes } = props;
  return(
    <div className={classes.root}>
      <Grid container className={classes.container} justify='center' alignItems='center'>
        {props.centerPaneState.usersTodos.filter(filterOut(props.centerPaneState.searchTerm)).filter( user => user.isSelected === true || user.userId === null).map( todo =>
          <Fragment key={todo.id} >
            <Grid item  className={classes.todo} container justify='flex-start' alignItems='center' style={todo.isToggling ? {backgroundColor:'white', color:'rgb(85, 220, 156)'} : null}>
              <Grid item className={classes.checkBox}>
                {
                  todo.userId === null ?
                  <CardGiftcard
                    onClick={()=> props.completedWithoutComment(todo.id)}
                    style={{height:'35px', width:'35px', paddingLeft:'10px', marginRight:'13px' }}
                  />
                    :
                  <Checkbox
                    checked={todo.completed}
                    onChange={()=> props.completedWithoutComment(todo.id)}
                    indeterminate={todo.hasOwnProperty('comment') ? false : true}
                    color={todo.hasOwnProperty('comment') ? 'primary' : 'secondary'}
                  />
              }
              </Grid>
              <Grid item className={classes.title}>
                {todo.title}
              </Grid>
              <Grid item className={classes.chevron} onClick={()=> props.toggleTodo(todo.id)}>
              {todo.isToggling?<ChevronRight/>:<ChevronLeft/>}
              </Grid>
            </Grid>
          </Fragment>
        )}
      </Grid>
    </div>
  );
}

const mapStateToProps = state => ({
  centerPaneState: state.mainReducer
});

CenterPane.propTypes = {
  classes: PropTypes.object.isRequired,
  centerPaneState: PropTypes.object.isRequired,
  completedWithoutComment: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { toggleTodo, completedWithoutComment })(withStyles(centerPaneStyles)(CenterPane));
