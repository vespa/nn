import React from 'react';
import PropTypes from 'prop-types';
import classes from './style.scss';

class Slider extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  isCurrent() {
    return true;
  }

  render() {
    const { children } = this.props;
    let count = 0;
    return (
      <ul className={classes.slider}>
        {children.map((item) => {
          count += 1;
          return <li key={count}> {item}</li>;
        })}
      </ul>
    );
  }
}

export default Slider;
