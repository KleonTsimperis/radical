import React from 'react';
import PropTypes from 'prop-types';
import './Backdrop.css';

const BackDrop = props =>
  props.open ? <div className="BackDrop"></div> : null;

BackDrop.propTypes = {
  open: PropTypes.bool.isRequired,
};


export default BackDrop;
