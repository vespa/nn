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
    this.next = this.next.bind(this);
    this.setTouchStart = this.setTouchStart.bind(this);
    this.setTouchEnd = this.setTouchEnd.bind(this);
    this.setTouchCurrent = this.setTouchCurrent.bind(this);
    this.goTo = this.goTo.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      const { active } = this.state;
      this.setState({
        active: active - 1,
        touchEnd: 0,
      }, () => {
        this.next(true);
      });
    });
  }

  setTouchStart(e) {
    const touch = e.touches[0];
    this.setState({
      touchStart: touch.clientX,
    });
  }

  setTouchCurrent(e) {
    const touch = e.touches[0];
    this.setState({
      touchEnd: touch.clientX,
    });
  }

  setTouchEnd() {
    const range = 100;
    const { touchStart, touchEnd } = this.state;
    if (touchEnd === 0) return false;
    let left = touchStart >= touchEnd;
    left = touchStart === touchEnd ? null : left;
    const distance = touchStart - touchEnd;
    if (Math.abs(distance) > range) this.next(left);
    return true;
  }

  next(left) {
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

  goTo(slide) {
    return (e) => {
      e.preventDefault();
      this.setState({
        active: slide - 1,
        touchEnd: 0,
      }, () => {
        this.next(true);
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
            onTouchStart={this.setTouchStart}
            onTouchEnd={this.setTouchEnd}
            onTouchMove={this.setTouchCurrent}
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
            return <a href={`${i}`} key={count} onClick={this.goTo(i)} className={`${acitveClass} ${classes.slider__nav__item}`}>{i}</a>;
          })}
        </div>
      </div>
    );
  }
}

export default Slider;
