import React from "react";

const trending = [
  { title: "AI is changing everything", likes: 432 },
  { title: "React 19 is out!", likes: 325 },
  { title: "Dark mode vs Light mode", likes: 278 },
];

export default function TrendingPosts() {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="text-xl font-semibold mb-3">🔥 Trending Posts</h2>
      <ul>
        {trending.map((post, index) => (
          <li key={index} className="mb-2">
            <div className="flex justify-between">
              <span>{post.title}</span>
              <span className="text-gray-500">{post.likes} likes</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
