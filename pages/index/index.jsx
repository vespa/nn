import React from 'react';
import PropTypes from 'prop-types';
import List from '../../components/List';
import { listGetData } from '../../redux/ducks/list';
import Header from '../../components/Header';
import Slider from '../../components/Slider';

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
        <Header currentBalance={currentBalance} customer={customer} date={queryDate} />
        <Slider>
          <List options={extract} />
          <List options={extract} deletable />
          <List options={extract} deletable />
        </Slider>
      </div>
    );
  }
}

export default Index;
