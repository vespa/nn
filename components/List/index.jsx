import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';

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
    let index = 0;
    return (
      <ul>
        {options.map((item) => {
          index += 1;
          return (
            <li key={`${item.text}${index}`}>
              <span>{item.text}</span>
              <a href="#remove">
                <span><Image src="icon-delete" alt="deletar" /></span>
              </a>
            </li>
          );
        }) }
      </ul>
    );
  }
}

export default List;
