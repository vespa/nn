import React from 'react';
import List from '../../components/List';

class Index extends React.Component {
  static async getInitialProps() {
    return {};
  }


  render() {
    return (
      <div><List options={[{ icon: 'icon-categoria', text: 'This is a text' }]} /></div>
    );
  }
}

export default Index;
