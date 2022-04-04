import { StarIcon } from '@heroicons/react/solid';
import React from 'react';
import './ReviewCard.css'

const ReviewCard = ({ review }) => {
    return (
        <div className='my-6 p-6 border-2 rounded-xl shadow-xl'>
            <div className='flex items-center'>
                <img className='w-12 rounded-xl' src={review.img} alt="" />
                <p className='ml-4 text-2xl font-medium'>{review.name}</p>
            </div>
            <p className='mt-4 text-xl'>{review.description}</p>
            <p className='flex item-center text-orange-500 pt-2'>{
                [...Array(review.ratings)].map((el, index) => <StarIcon className='w-6' key={index}></StarIcon>)
            }</p>
        </div>
    );
};

export default ReviewCard;