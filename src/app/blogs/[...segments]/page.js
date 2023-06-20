'use client'
import { useParams, useSearchParams } from 'next/navigation';
import React from 'react';

const SingleBlogPage = ({ params, searchParams }) => {
    // console.log(params.segments);
    const [year, id] = params.segments || [];
    const params2 = useParams();
    const searchParams2 = useSearchParams();
    return (
        <div>
            <h2>Single Blog Page: {year || new Data().getFullYear()} for {id}</h2>
            {searchParams.title}
        </div>
    );
};

export default SingleBlogPage;