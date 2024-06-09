"use client";
import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { posts } from "@/data/posts";
import { Post, PostComment, PostTableProps } from "@/types";
import { Button } from "../ui/button";

const PostTables = ({ limit, title }: PostTableProps) => {
    // sort posts by date in descending order
    const sortedPosts: Post[] = [...posts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )

    // filter the posts based on the limit
    const filteredPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts

    return (
        <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4">{title ? title : "Posts"}</h3>
            <Table>
                <TableCaption>a List of Recent Post</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead className="hidden md:table-cell">Author</TableHead>
                        <TableHead className="hidden md:table-cell text-right">
                            Date
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredPosts.map((post: Post) => (
                        <TableRow key={post.id}>
                            <TableCell>{post.title}</TableCell>
                            <TableCell className="hidden md:table-cell">
                                {post.author}
                            </TableCell>
                            <TableCell className="hidden md:table-cell text-right">
                                {post.date}
                            </TableCell>
                            <TableCell className="text-right">
                                <Link href={`/posts/${post.id}`}>
                                    <Button>View</Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default PostTables;
