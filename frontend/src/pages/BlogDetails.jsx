import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { blogs } from "../services/blogs";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return <div className="pt-32 text-center">Post not found.</div>;

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] dark:text-white pt-32 pb-20">
      <article className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-indigo-600 mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <header className="space-y-6 mb-12">
          <span className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-4 py-1.5 rounded-full text-sm font-bold">
            {blog.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            {blog.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800 pb-8">
            <div className="flex items-center gap-2"><User className="w-4 h-4" /> Admin</div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> {blog.readTime}</div>
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> March 2026</div>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl leading-relaxed mb-6 italic text-gray-600 dark:text-gray-300">
            {blog.desc}
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <h2 className="text-2xl font-bold mt-10 mb-4">The core concepts</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="my-10 p-8 bg-gray-50 dark:bg-gray-800 rounded-3xl border-l-4 border-indigo-600">
             "The best way to predict the future is to create it." - Industry Expert
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogDetails;