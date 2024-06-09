import { Post } from "@/types";

export const posts: Post[] = [
    {
        id: '1',
        title: 'Post 1',
        body: 'This is post 1',
        author: 'John',
        date: '2020-01-01',
        comments: [
            {
                id: '1',
                text: 'This is comment 1',
                username: 'Jane'
            }
        ]
    },
    {
        id: '2',
        title: 'Post 2',
        body: 'This is post 2',
        author: 'Jane',
        date: '2020-01-05',
        comments: [
            {
                id: '1',
                text: 'This is comment 1',
                username: 'John'
            }
        ]
    },
    {
        id: '3',
        title: 'Post 3',
        body: 'This is post 3',
        author: 'John',
        date: '2020-01-03',
        comments: [
            {
                id: '1',
                text: 'This is comment 1',
                username: 'Jane'
            }
        ]
    },
    {
        id: '4',
        title: 'Post 4',
        body: 'This is post 4',
        author: 'Jane',
        date: '2020-01-09',
        comments: [
            {
                id: '1',
                text: 'This is comment 1',
                username: 'John'
            }
        ]
    }
]