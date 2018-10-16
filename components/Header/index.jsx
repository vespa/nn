import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../elements/Image';
import classes from './style.scss';

const Header = ({ currentBalance, customer, date }) => (
  <header className={classes.header}>
    <div>
      <Image src="neon-logo-02" />
    </div>
    <div className={classes.header__balance}> Saldo: {currentBalance}</div>
    <div />
    <div />
    <div>
      {date}
      <div className={classes.header__separator} />
      Bem vindo, {customer}
    </div>
  </header>
);

Header.propTypes = {
  currentBalance: PropTypes.string.isRequired,
  customer: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
};

export default Header;
