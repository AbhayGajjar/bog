import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { FileText, MessageCircle, Plus, PlusCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

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

      {/* cards */}

      <div className="grid md:grid-cols-3 gap-3 mb-8">
        <Card>
          <CardHeader className="flex flex-row justify-between items-center space-y-0 ">
            <CardTitle>Total Article</CardTitle>
            <FileText className="h-5 w-5" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-sm text-muted-foreground mt-2">
              +5 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row justify-between items-center space-y-0  ">
            <CardTitle>Total Comments</CardTitle>
            <MessageCircle className="h-5 w-5" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">3</div>
            <p className="text-sm text-muted-foreground mt-2">
              12 awaited modration
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row justify-between items-center space-y-0  ">
            <CardTitle>Ave. Rating Time</CardTitle>
            <MessageCircle className="h-5 w-5" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">4.2</div>
            <p className="text-sm text-muted-foreground mt-2">
              +0.6 last month
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default BlogDashboard;
