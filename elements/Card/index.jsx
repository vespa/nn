import React from 'react';
import PropTypes from 'prop-types';
import classes from './style.scss';

const Card = ({ children }) => <div className={classes.card}>{children}</div>;

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
