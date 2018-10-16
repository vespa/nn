import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../elements/Image';
import Card from '../../elements/Card';
import Confirm from '../Confirm';
// import classes from './style.scss';

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
    this.state = {
      messageConfirm: null,
    };
    this._removeFromList = this._removeFromList.bind(this);
    this._showMessage = this._showMessage.bind(this);
    this._cancelMessage = this._cancelMessage.bind(this);
  }

  _cancelMessage() {
    this.setState({
      messageConfirm: null,
    });
  }

  _showMessage(target) {
    const cancel = this._cancelMessage;
    const callback = () => {
      target.parentNode.removeChild(target);
      cancel();
    };
    const messageConfirm = <Confirm message="Confirma exclusão?" callback={callback} cancel={cancel} />;
    this.setState({
      messageConfirm,
    });
  }

  _removeFromList(e) {
    e.preventDefault();
    const target = e.target.parentNode.parentNode;
    this._showMessage(target);
  }

  render() {
    const { options } = this.props;
    const { messageConfirm } = this.state;
    let index = 0;
    return (
      <React.Fragment>
        {messageConfirm}
        <Card>
          <ul>
            {options.map((item) => {
              index += 1;
              return (
                <li key={`${item.text}${index}`}>
                  <span>{item.text}</span>
                  <a href="#remove" onClick={this._removeFromList}>
                    <Image src="icon-delete" alt="deletar" />
                  </a>
                </li>
              );
            }) }
          </ul>
        </Card>
      </React.Fragment>
    );
  }
}

export default List;
