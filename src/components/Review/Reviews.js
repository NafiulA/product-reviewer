import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = () => {
    const [reviews] = useReviews()
    return (
        <div>
            <h3 className='text-4xl my-4 text-center text-slate-800 font-bold'>Customer Reviews</h3>
            <div className='w-11/12 md:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    reviews.map(review => <ReviewCard key={review.id} review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;