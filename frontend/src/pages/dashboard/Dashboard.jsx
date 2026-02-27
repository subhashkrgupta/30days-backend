import React, { useState } from 'react';

const Dashboard = () => {
  // Dummy data: Real app mein ye database se aayega
  const [posts, setPosts] = useState([
    { id: 1, title: 'My First Blog', status: 'Published', date: '2024-03-20' },
    { id: 2, title: 'Learning React', status: 'Draft', date: '2024-03-22' },
  ]);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* 1. Sidebar */}
      <div className="w-64 bg-slate-800 text-white p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-8">Blog Admin</h2>
        <nav className="space-y-4">
          <a href="#" className="block py-2 px-4 bg-blue-600 rounded">Dashboard</a>
          <a href="#" className="block py-2 px-4 hover:bg-slate-700 rounded">My Posts</a>
          <a href="#" className="block py-2 px-4 hover:bg-slate-700 rounded">Settings</a>
        </nav>
      </div>

      {/* 2. Main Content Area */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Welcome Back, User!</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            + Create New Post
          </button>
        </header>

        <main className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <p className="text-sm text-gray-500 uppercase font-bold">Total Posts</p>
              <p className="text-3xl font-bold">{posts.length}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <p className="text-sm text-gray-500 uppercase font-bold">Total Views</p>
              <p className="text-3xl font-bold">1,240</p>
            </div>
          </div>

          {/* Recent Posts Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-bold text-gray-700">Recent Posts</h3>
            </div>
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-4 text-sm font-semibold text-gray-600">Title</th>
                  <th className="p-4 text-sm font-semibold text-gray-600">Status</th>
                  <th className="p-4 text-sm font-semibold text-gray-600">Date</th>
                  <th className="p-4 text-sm font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-800">{post.title}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${post.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {post.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-gray-500">{post.date}</td>
                    <td className="p-4 space-x-2">
                      <button className="text-blue-600 hover:underline text-sm">Edit</button>
                      <button className="text-red-500 hover:underline text-sm">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;