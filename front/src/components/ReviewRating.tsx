
import React from 'react';

interface RatingProps {
  rating: number; // The rating should be a float between 0 and 5
}

const Star: React.FC<{ filled: boolean }> = ({ filled }) => (
  <span className='text-xl' style={{ color: filled ? '#FF8C13' : '#C0C0C0' }}>
    {filled ? '★' : '☆'}
  </span>
);

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div>
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} filled={true} />
      ))}
      {halfStar === 1 && <Star key="half" filled={true} />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={i + fullStars + 1} filled={false} />
      ))}
    </div>
  );
};

export default Rating;

