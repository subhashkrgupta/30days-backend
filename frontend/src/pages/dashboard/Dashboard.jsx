import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  // Dummy data: Real app mein ye database se aayega
  const [posts] = useState([
    { id: 1, title: 'My First Blog', status: 'Published', date: '2024-03-20' },
    { id: 2, title: 'Learning React', status: 'Draft', date: '2024-03-22' },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 ">
      <div className="max-w-6xl mx-auto mt-10">
        <header className="bg-white shadow-sm px-4 md:px-8 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
              Welcome back 👋
            </h1>
            <p className="text-sm text-gray-500">
              Manage your blogs and track performance.
            </p>
          </div>
          <button
            onClick={() => navigate('/dashboard/create')}
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 transition"
          >
            + Create Blog
          </button>
        </header>

        <main className="p-4 md:p-8 space-y-8">
          {/* Stats Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Total Posts
              </p>
              <p className="mt-2 text-3xl font-bold text-gray-900">
                {posts.length}
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Total Views
              </p>
              <p className="mt-2 text-3xl font-bold text-gray-900">1,240</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Drafts
              </p>
              <p className="mt-2 text-3xl font-bold text-gray-900">
                {posts.filter((p) => p.status === 'Draft').length}
              </p>
            </div>
          </section>

          {/* Recent Posts Table */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
              <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                Recent Posts
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-3 text-xs font-semibold text-gray-600">
                      Title
                    </th>
                    <th className="p-3 text-xs font-semibold text-gray-600">
                      Status
                    </th>
                    <th className="p-3 text-xs font-semibold text-gray-600">
                      Date
                    </th>
                    <th className="p-3 text-xs font-semibold text-gray-600">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {posts.map((post) => (
                    <tr key={post.id} className="hover:bg-gray-50">
                      <td className="p-3 font-medium text-gray-800">
                        {post.title}
                      </td>
                      <td className="p-3">
                        <span
                          className={`inline-flex px-2 py-1 text-xs rounded-full ${
                            post.status === 'Published'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}
                        >
                          {post.status}
                        </span>
                      </td>
                      <td className="p-3 text-xs text-gray-500">
                        {post.date}
                      </td>
                      <td className="p-3 space-x-2">
                        <button className="text-indigo-600 hover:underline text-xs">
                          Edit
                        </button>
                        <button className="text-red-500 hover:underline text-xs">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;