import DashboardCard from "@/components/dashboard/DashboardCard";
import PostTables from "@/components/posts/PostTables";
import { Folder, MessageCircle, Newspaper, Users } from "lucide-react";
export default function Home() {
  return (
    <>
      <div className="flex justify-between flex-col md:flex-row gap-5 mb-5">
        <DashboardCard title="Posts" count={10} icon={<Newspaper className='text-slate-500' size={72} />} />
        <DashboardCard title="Users" count={750} icon={<Users className='text-slate-500' size={72} />} />
        <DashboardCard title="Comments" count={1200} icon={<MessageCircle className='text-slate-500' size={72} />} />
        <DashboardCard title="Categories" count={12} icon={<Folder className='text-slate-500' size={72} />} />
      </div>
      <PostTables title="Latest Posts" limit={5} />
    </>
  );
}
