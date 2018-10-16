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
    };
    this.isCurrent = this.isCurrent.bind(this);
  }

  isCurrent() {
    const { children } = this.props;
    const { active } = this.state;
    const totalChilds = children.length;
    const maxScrollLeft = this.ref.current.scrollWidth;
    const divisions = maxScrollLeft / totalChilds;
    // const left = this.ref.current.scrollLeft;
    // this.ref.current.scrollLeft = 999;
    console.log(divisions);
    setTimeout(()=>{
      this.ref.current.style.left = -(divisions) + "px";
    });
    this.setState({
      active: active + 1,
    })
    
  }

  render() {
    const { children } = this.props;
    const { active } = this.state;
    let acitveClass;
    let count = 0;
    return (
      <div className={classes.slider__container}>
        <div className={classes.slider} onTouchEnd={this.isCurrent}>
          <ul className={classes.slider} ref={this.ref}>
            {children.map((item, i) => {
              acitveClass = i === active ? classes.active : ''
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
