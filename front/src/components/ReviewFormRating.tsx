
import React from 'react';
// @ts-ignore
import ReactStars from 'react-rating-stars-component'

const RatingStar = ({ value, onChange } : {
  value: number,
  onChange: any
}) => {
  return (
    <ReactStars
      count={5}
      value={value}
      onChange={onChange}
      size={20}
      activeColor="#FF8C13"
    />
  );
};

export default RatingStar;
