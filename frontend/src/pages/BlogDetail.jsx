import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const BlogDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/api/v1/blogs/${id}`, { withCredentials: true });
        if (!mounted) return;
        setBlog(res.data?.blog || null);
      } catch (err) {
        if (!mounted) return;
        setError(err.response?.data?.message || 'Failed to load blog');
      } finally {
        if (mounted) setLoading(false);
      }
    };
    load();
    return () => {
      mounted = false;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-200 p-6">
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-200 p-6">
          <p className="text-red-600 text-sm">{error}</p>
          <Link to="/blog" className="mt-4 inline-flex items-center gap-2 text-indigo-600 font-semibold">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-200 p-6">
          <p className="text-gray-600">Blog not found.</p>
          <Link to="/blog" className="mt-4 inline-flex items-center gap-2 text-indigo-600 font-semibold">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-2 text-indigo-600 font-semibold">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <article className="mt-6 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 md:p-8">
            {blog.category && (
              <div className="inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-bold uppercase tracking-wide">
                {blog.category}
              </div>
            )}

            <h1 className="mt-4 text-2xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              {blog.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5" />
                {blog.author?.userName || 'Unknown'}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : '—'}
              </span>
            </div>

            <div className="prose prose-gray max-w-none mt-6">
              <p className="whitespace-pre-line text-gray-700 leading-relaxed">
                {blog.content}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;

