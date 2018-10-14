import React from 'react';
import PropTypes from 'prop-types';

/**
 * This component provides a simple List structure
 */
class List extends React.Component {
  static propTypes = {
    /** expects options to generate items */
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  constructor(args) {
    super(args);
    this._removeFromList = this._removeFromList.bind(this);
  }

  /**
   * @function
   * @description removes a item from the list
   * @param {object} e expects a event object
   */

  _removeFromList(e) {
    e.preventDefault();
  }

  render() {
    const { options } = this.props;
    return (
      <ul>
        {options.map((item) => {
          return (
            <li key={item.text}>
              <span>{item.ico}</span>
              <span>{item.text}</span>
              <span>ico</span>
            </li>
          );
        }) }
      </ul>
    );
  }
}

export default List;
