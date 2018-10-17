import React from 'react';
import PropTypes from 'prop-types';
import classes from './style.scss';

class Slider extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      active: 0,
      touchStart: 0,
      touchEnd: 0,
    };
    this._next = this._next.bind(this);
    this._setTouchStart = this._setTouchStart.bind(this);
    this._setTouchEnd = this._setTouchEnd.bind(this);
    this._setTouchCurrent = this._setTouchCurrent.bind(this);
    this._goTo = this._goTo.bind(this);
    this._updateResize = this._updateResize.bind(this);
    this._listenToRezise = this._listenToRezise.bind(this);
  }

  componentDidMount() {
    this._listenToRezise();
  }

  _listenToRezise() {
    window.addEventListener('resize', this._updateResize);
  }

  _updateResize() {
    const { active } = this.state;
    this.setState({
      active: active - 1,
      touchEnd: 0,
    }, () => {
      this._next(true);
    });
  }

  _setTouchStart(e) {
    const touch = e.touches[0];
    this.setState({
      touchStart: touch.clientX,
    });
  }

  _setTouchCurrent(e) {
    const touch = e.touches[0];
    this.setState({
      touchEnd: touch.clientX,
    });
  }

  _setTouchEnd() {
    const range = 100;
    const { touchStart, touchEnd } = this.state;
    if (touchEnd === 0) return false;
    const left = touchStart >= touchEnd;
    const distance = touchStart - touchEnd;
    if (Math.abs(distance) > range) this._next(left);
    return true;
  }

  _next(left) {
    const { children } = this.props;
    const { active } = this.state;
    const totalChilds = children.length;
    const maxScrollLeft = this.ref.current.scrollWidth;
    const divisions = maxScrollLeft / totalChilds;
    const current = left ? 1 : -1;
    let show = active + current;
    show = (show) < 0 ? 0 : show;
    show = (show) > totalChilds - 1 ? totalChilds - 1 : show;
    this.ref.current.style.left = `${-(divisions * show)}px`;
    this.setState({
      active: show,
      touchEnd: 0,
    });
  }

  _goTo(slide) {
    return (e) => {
      e.preventDefault();
      this.setState({
        active: slide - 1,
        touchEnd: 0,
      }, () => {
        this._next(true);
      });
    };
  }

  render() {
    const { children } = this.props;
    const { active } = this.state;
    let acitveClass;
    let count = 0;
    return (
      <div>
        <div className={classes.slider__container}>
          <div
            className={classes.slider}
            onTouchStart={this._setTouchStart}
            onTouchEnd={this._setTouchEnd}
            onTouchMove={this._setTouchCurrent}
          >
            <ul className={classes.slider} ref={this.ref}>
              {children.map((item, i) => {
                acitveClass = i === active ? classes.active : '';
                count += 1;
                return <li key={count} className={acitveClass}> {item}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className={`${classes.slider__nav}`}>
          {children.map((item, i) => {
            count += 1;
            acitveClass = i === active ? classes.active : '';
            return <a href={`${i}`} key={count} onClick={this._goTo(i)} className={`${acitveClass} ${classes.slider__nav__item}`}>{i}</a>;
          })}
        </div>
      </div>
    );
  }
}

export default Slider;
