import React from 'react';

import { useParams } from 'react-router-dom';

import PageHeader from '../components/page_header/PageHeader';

import { category as cate } from '../api/tmdbApi'

const Catalog = () => {
    const { category } = useParams();

    console.log(category)
    return (
            <>
                <PageHeader>
                    {category === cate.movie ? 'Movies' : `TV Series`}
                </PageHeader>
            </>
    )
}

export default Catalog
