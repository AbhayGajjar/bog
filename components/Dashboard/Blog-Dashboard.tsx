import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Plus, PlusCircle } from "lucide-react";

const BlogDashboard = () => {
  return (
    <main className="flex-1 p-4 md:p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="font-bold text-2xl">Blog Dashboard</h1>
          <p>
            Welcome to your blog dashboard. Here you can manage your blog posts,
            comments, and other related content.
          </p>
        </div>

        <Link href={"/dashboard/articles/create"}>
          <Button className="flex items-center justify-center">
            <PlusCircle className=" h-5 w-5 " />
            New Article
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default BlogDashboard;
