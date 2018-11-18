import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { fetchTodos, fetchUsers, mergeUsersTodos, error } from '../actions/actions';
import LeftPane from '../components/LeftPane';
import CenterPane from '../containers/CenterPane';
import RightPane from '../containers/RightPane';
import { menuStyles } from './styles/menuStyles';

const PATH_TODOS = 'https://jsonplaceholder.typicode.com/todos';

class Menu extends Component {

  componentDidMount() {
    axios.get(`${PATH_TODOS}`)
         .then( res => this.props.dispatch(fetchTodos(res.data.filter(todo => todo.id <= 60))))
         .catch( err => this.props.dispatch(error(err)))
  }

  componentDidUpdate(prevProps) {
    if(prevProps.menuState.todos !== this.props.menuState.todos){
      axios.get('users.json')
           .then( response => this.props.dispatch(fetchUsers(response.data)))
           .then( ()=> this.props.dispatch(mergeUsersTodos()))
           .catch( err => this.props.dispatch(error(err)))
    }
  }

  render(){
    const { classes } = this.props;
    return(
      <div className={classes.root}>
        <Grid container>
          <Grid item md={3} sm={12} className={classes.left}>
            <LeftPane/>
          </Grid>
          <Grid item md={6} sm={12}>
            <CenterPane/>
          </Grid>
          <Grid item md={3} sm={12} className={classes.right}>
            <RightPane/>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  menuState:state.mainReducer
})

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(withStyles(menuStyles)(Menu));
