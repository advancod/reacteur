import React from 'react';
import RcSlider from 'rc-slider/lib/Slider';

const Slider = props => {
  return (
    
    <div className="slider-container">
      <div className="slider-icon">{React.cloneElement(props.icon, { size: 40 })}</div>
      <div className="slider-content">
        <p className="slider-name">
          {props.name + ': '} <span className="slider-value">{props.value + props.unit}</span>
        </p>
        <div className="slider-range">
        <RcSlider min={props.min} max={props.max} value={props.value} onChange={val => {
    props.onChange(val);
  }} />

        </div>
      </div>
    </div>
  );
};

export default Slider;
