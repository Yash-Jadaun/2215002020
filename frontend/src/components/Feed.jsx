import React from "react";

const posts = [
  {
    user: "Yash",
    content: "Just finished a DSA problem. Feeling great!",
    time: "2h ago",
  },
  {
    user: "Ravi",
    content: "Check out my new portfolio site 🚀",
    time: "4h ago",
  },
];

export default function Feed() {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="text-xl font-semibold mb-3">📰 Feed</h2>
      {posts.map((post, index) => (
        <div key={index} className="mb-4 p-2 border-b">
          <p className="font-semibold">{post.user}</p>
          <p className="text-gray-700">{post.content}</p>
          <p className="text-sm text-gray-400">{post.time}</p>
        </div>
      ))}
    </div>
  );
}
