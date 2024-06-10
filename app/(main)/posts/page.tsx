import React from 'react'
import BackButton from '@/components/BackButton';
import PostPagination from '@/components/posts/PostPagination';
import PostTables from '@/components/posts/PostTables'

  
const PostPage = () => {
    return (
        <>
            <BackButton text='Go back' link='/' />
            <PostTables />
            <PostPagination />
        </>
    )
}

export default PostPage;