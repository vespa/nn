import React from 'react';
import PropTypes from 'prop-types';
import classes from './style.scss';

const Card = ({ children }) => <section className={classes.card}>{children}</section>;

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
