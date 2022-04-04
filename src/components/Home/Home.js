import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import HeroSection from '../HeroSection/HeroSection';
import ReviewCard from '../ReviewCard/ReviewCard';

const Home = () => {
    const [reviews] = useReviews();
    const navigate = useNavigate();
    return (
        <div>
            <HeroSection></HeroSection>
            <div className='mb-10'>
                <h3 className='text-4xl my-4 text-center text-slate-800 font-bold'>Customer Reviews</h3>
                <div className='w-11/12 md:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        reviews.slice(0, 3).map(review => <ReviewCard key={review.id} review={review}></ReviewCard>)
                    }
                </div>
                <div className='text-center my-4'>
                    <button className='px-4 py-2 bg-slate-600 text-white text-xl rounded-xl' onClick={() => navigate("/reviews")}>See all Reviews</button>
                </div>
            </div>
        </div>
    );
};

export default Home;