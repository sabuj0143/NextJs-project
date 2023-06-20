import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: 'Blogs | Next Hero',
    description: 'Next Hero',
  }
const blogs = [
    {
        id: 1,
        year: 2016,
        title: 'title 1'
    },
    {
        id: 2,
        year: 2016,
        title: 'title 2'
    },
    {
        id: 3,
        year: 2016,
        title: 'title 3'
    },
    {
        id: 4,
        year: 2016,
        title: 'title 4'
    },
]
const BlogsPage = () => {
    return (
        <div className='container mx-auto'>
            {
                blogs.map(({id, year, title}) => <Link className='block border border-blue-500 my-2 p-4' href={`/blogs/${year}/${id}`} key={id}>{title}</Link>)
            }
        </div>
    );
};

export default BlogsPage;