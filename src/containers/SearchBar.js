import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import Cancel from '@material-ui/icons/Cancel';
import { connect } from 'react-redux';
import { handleSearchTerm, clearField } from '../actions/actions';
import { searchBarStyles } from './styles/searchBarStyles';

const SearchBar = props => {
  const { classes } = props;
  return(
      <div className={classes.div}>
        <SearchIcon className={classes.search}/>
        <input value={props.searchBarState.searchTerm} onChange={e => props.handleSearchTerm(e.target.value)} className={classes.input}/>
        <Cancel className={classes.cancel} onClick={() => props.clearField()}/>
      </div>
  )
}

const mapStateToProps = state => ({
  searchBarState: state.mainReducer
});

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
  searchBarState: PropTypes.object.isRequired,
  handleSearchTerm: PropTypes.func.isRequired,
  clearField: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { handleSearchTerm, clearField })(withStyles(searchBarStyles)(SearchBar));
