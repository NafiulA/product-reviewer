import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h3 className='text-4xl my-4 text-center text-slate-800 font-bold'>Questions/Answers</h3>
            <div className='w-11/12 md:w-3/4 mx-auto'>
                <div className='my-6 p-6 border-2 rounded-xl shadow-lg'>
                    <p className='text-2xl font-semibold' >Q1. What is Context API?</p>
                    <p className='text-xl pt-2'>A: Context api is an easier way to pass data through components. It's a way around prop drilling. While doing prop drilling, we have to pass data to every children one by one. But when we use context api, we can pass data down to a child without having to pass data to every level of the tree. Context.Provider is a react component that takes data as value and passes it to the child where it needs to be delivered with the help of useContext hook provided by react.</p>
                </div>
                <div className='my-6 p-6 border-2 rounded-xl shadow-lg'>
                    <p className='text-2xl font-semibold' >Q2. What is Semantic tag?</p>
                    <p className='text-xl pt-2'>A: Semantic tag or Semantic element is element that clearly describes the purpose of using that element and what type of content is inside that element. Some examples of semantic tags are header,footer,article,main etc. Using semantic element provides a lot of advantage to the developer such as it becomes easier to read and understand the code, it has great accessibility and it also improves the SEO ranking of the website as search engines will consider it's content as important keywords to influence the pages search ranking.</p>
                </div>
                <div className='my-6 p-6 border-2 rounded-xl shadow-lg'>
                    <p className='text-2xl font-semibold' >Q2. What is the difference between inline,block and inline-block?</p>
                    <p className='text-xl pt-2'>A: An inline element has no extra width or height,it only takes the width and height it needs and sits next to other inline element on the webpage. Where a block element creates a line break and takes the whole width of the webpage. you can also add additional height to a block element. Now an inline-block element has the advantage of both inline and block element. You can control height and width of an inline-block element and it can also sit next to other inline or inline-block element.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;