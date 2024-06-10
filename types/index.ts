
import { LucideIcon } from "lucide-react"
export interface DashboardCardProps {
    title: string;
    count: number;
    icon: React.ReactElement<LucideIcon>;
}

export interface Post {
    id: string;
    title: string;
    body: string;
    author: string;
    date: string;
    comments: PostComment[]
}

export interface PostComment {
    id: string
    text: string
    username: string
}

export interface PostTableProps {
    limit?: number
    title?: string
}

export interface AnalyticsItem {
    name: string;
    uv: number;
    pv: number;
    amt: number;
}