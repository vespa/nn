import React from 'react';
import PropTypes from 'prop-types';
import classes from './style.scss';

const Header = ({ currentBalance, customer, date }) => (
  <header className={classes.header}>
    <div className={classes.header__logo} />
    <div className={classes.header__balance}> saldo<span> {currentBalance}</span></div>
    <div />
    <div />
    <div>
      {date}
      <div className={classes.header__separator} />
      Bem vindo<span>, {customer}</span>
    </div>
  </header>
);

Header.propTypes = {
  currentBalance: PropTypes.string.isRequired,
  customer: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
};

export default Header;
