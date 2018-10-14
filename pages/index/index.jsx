import React from 'react';
import PropTypes from 'prop-types';
import List from '../../components/List';
import Image from '../../components/Image';
import { listGetData } from '../../redux/ducks/list';
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
        <Image src="icon-calendar" alt="" />
        <div> Saldo {currentBalance} </div>
        <div> {queryDate} </div>
        <div> Bem vindo, {customer} </div>
        <List options={extract} />
      </div>
    );
  }
}

export default Index;
