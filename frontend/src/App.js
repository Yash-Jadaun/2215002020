import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [topUsers, setTopUsers] = useState([]);
  const [trendingPosts, setTrendingPosts] = useState([]);

  // Real-time post simulation
  useEffect(() => {
    const fetchData = () => {
      const users = ["Yash", "Ravi", "Ananya", "Sita", "Aman"];
      const messages = [
        "React is awesome!",
        "Just solved a LeetCode problem!",
        "Starting a new blog!",
        "Check out my latest video!",
        "Node.js + MongoDB is power 💪",
      ];
      const randomPost = {
        user: users[Math.floor(Math.random() * users.length)],
        content: messages[Math.floor(Math.random() * messages.length)],
        time: new Date().toLocaleTimeString(),
        image: `https://source.unsplash.com/random/400x200?technology`, // Image URL
      };

      setPosts((prev) => {
        const updated = [randomPost, ...prev].slice(0, 20);
        setFilteredPosts(
          updated.filter(
            (post) =>
              post.user.toLowerCase().includes(search.toLowerCase()) ||
              post.content.toLowerCase().includes(search.toLowerCase())
          )
        );
        return updated;
      });
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);

    setTopUsers([
      { name: "Yash", followers: "1.2K" },
      { name: "Ravi", followers: "950" },
      { name: "Ananya", followers: "870" },
    ]);

    setTrendingPosts([
      { title: "React 19 Released", likes: 432 },
      { title: "Next.js vs Remix", likes: 389 },
      { title: "Dark Mode Debate", likes: 270 },
    ]);

    return () => clearInterval(interval);
  }, [search]);

  // Handle filter
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    setFilteredPosts(
      posts.filter(
        (post) =>
          post.user.toLowerCase().includes(value.toLowerCase()) ||
          post.content.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div className="container">
      <h1 className="header">🌐 Social Sphere</h1>
      <div className="grid">
        {/* Top Users */}
        <div className="card">
          <h2 className="section-title">👑 Top Users</h2>
          <ul>
            {topUsers.map((user, idx) => (
              <li className="item" key={idx}>
                <span>{user.name}</span>
                <span>{user.followers} followers</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Feed */}
        <div className="card feed">
          <h2 className="section-title">📰 Live Feed</h2>

          <input
            type="text"
            placeholder="Filter by name or keyword..."
            className="search-input"
            value={search}
            onChange={handleSearch}
          />

          {filteredPosts.length === 0 ? (
            <p>No matching posts found...</p>
          ) : (
            filteredPosts.map((post, idx) => (
              <div className="post" key={idx}>
                <p className="post-user">{post.user}</p>
                {post.image && (
                  <div className="post-image">
                    <img src={post.image} alt="post" />
                  </div>
                )}
                <p className="post-content">{post.content}</p>
                <p className="post-time">{post.time}</p>
              </div>
            ))
          )}
        </div>

        {/* Trending */}
        <div className="card">
          <h2 className="section-title">🔥 Trending Posts</h2>
          <ul>
            {trendingPosts.map((item, idx) => (
              <li className="item" key={idx}>
                <span>{item.title}</span>
                <span>{item.likes} likes</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
