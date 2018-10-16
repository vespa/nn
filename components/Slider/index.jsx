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
  }

  setTouchStart(e) {
    const touch = e.touches[0];
    console.log(touch.clientX);
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
    const { touchStart, touchEnd } = this.state;
    const left = touchStart >= touchEnd;
    this.next(left);
    console.log(left);
  }

  next(left) {
    const { children } = this.props;
    const { active } = this.state;
    const totalChilds = children.length;
    const maxScrollLeft = this.ref.current.scrollWidth;
    const divisions = maxScrollLeft / totalChilds;
    const current = left ? 1 : -1;

    // const left = this.ref.current.scrollLeft;
    // this.ref.current.scrollLeft = 999;
    // console.log(divisions);
    setTimeout(()=>{
      this.ref.current.style.left = -(divisions) + "px";
    });
    this.setState({
      active: current,
    })

  }

  render() {
    const { children } = this.props;
    const { active } = this.state;
    let acitveClass;
    let count = 0;
    return (
      <div className={classes.slider__container}>
        <div className={classes.slider} onTouchStart={this.setTouchStart} onTouchEnd={this.setTouchEnd} onTouchMove={this.setTouchCurrent}>
          <ul className={classes.slider} ref={this.ref}>
            {children.map((item, i) => {
              acitveClass = i === active ? classes.active : '';
              count += 1;
              return <li key={count} className={acitveClass}> {item}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Slider;
