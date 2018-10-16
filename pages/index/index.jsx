import React from 'react';
import PropTypes from 'prop-types';
import List from '../../components/List';
import { listGetData } from '../../redux/ducks/list';
// import classes from './style.scss';

/** Calls the first page */
class Index extends React.Component {
  static propTypes = {
    /** receive this info from customer API */
    res: PropTypes.shape({}).isRequired,
  }

  static async getInitialProps({ reduxStore }) {
    const { dispatch } = reduxStore;
    const res = await dispatch(listGetData());
    return { res };
  }

  render() {
    const {
      res: {
        extract, currentBalance, queryDate, customer,
      },
    } = this.props;
    return (
      <div>
        <div> Saldo {currentBalance} </div>
        <div> {queryDate} </div>
        <div> Bem vindo, {customer} </div>
        <List options={extract} deletable />
      </div>
    );
  }
}

export default Index;
