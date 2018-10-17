import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../elements/Image';
import Card from '../../elements/Card';
import Confirm from '../../elements/Confirm';
import classes from './style.scss';

/**
 * This component provides a simple List structure
 */
class List extends React.Component {
  static propTypes = {
    /** expects options to generate items */
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    /** if it's true, allows delete options */
    deletable: PropTypes.bool,
  }

  static defaultProps = {
    deletable: false,
  }

  constructor(args) {
    super(args);
    this.state = {
      messageConfirm: null,
    };
    this._removeFromList = this._removeFromList.bind(this);
    this._showMessage = this._showMessage.bind(this);
    this._cancelMessage = this._cancelMessage.bind(this);
    this._callMessage = this._callMessage.bind(this);
  }

  _cancelMessage() {
    this.setState({
      messageConfirm: null,
    });
  }

  _callMessage(target) {
    return () => {
      target.parentNode.removeChild(target);
      this._cancelMessage();
    };
  }

  _showMessage(target) {
    const cancel = this._cancelMessage;
    const callback = this._callMessage(target);
    const messageConfirm = <Confirm message="Confirma exclusão?" callback={callback} cancel={cancel} />;
    this.setState({
      messageConfirm,
    });
  }

  _removeFromList(e) {
    e.preventDefault();
    const target = e.target.parentNode;
    this._showMessage(target);
  }

  render() {
    const { options, deletable } = this.props;
    const { messageConfirm } = this.state;
    let index = 0;
    return (
      <React.Fragment>
        {messageConfirm}
        <Card>
          <ul className={classes.list}>
            {options.map((item) => {
              index += 1;
              return (
                <li key={`${item.text}${index}`} className={classes.list__item}>
                  <span className={`${classes.list__item__icon} ${classes['hide-mobile']}`}>
                    <Image src="icon-categoria" alt="categoria" />
                  </span>
                  <span className={classes.list__item__text}>
                    <span
                      className={`${classes.list__item__text__content}`}
                    >
                      {item.title}
                    </span>
                    <span
                      className={`
                        ${classes.list__item__text__content}
                        ${classes['list__item__text__content--box']}
                        ${classes[item.type]}
                        `}
                    >
                      R$ {item.value}
                    </span>
                  </span>
                  {deletable && (
                  <a href="#remove" onClick={this._removeFromList} className={classes.list__item__icon}>
                    <Image src="icon-delete" alt="deletar" />
                  </a>
                  )}

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
