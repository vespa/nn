import React from 'react';
import PropTypes from 'prop-types';
import List from '../../components/List';
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
    const { res: { extract, currentBalance } } = this.props;
    return (
      <div>
        <List options={extract} />
      </div>
    );
  }
}

export default Index;
