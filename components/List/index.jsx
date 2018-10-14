import React from 'react';

class List extends React.Component {
  constructor(args) {
    super(args);
    this._removeFromList = this._removeFromList.bind(this);
  }

  _removeFromList(e) {
    e.preventDefault();
  }

  render() {
    return (
      <ul>
        <li>
          <span>ico</span>
          <span>text</span>
          <span>ico</span>
        </li>
      </ul>
    );
  }
}

export default List;
