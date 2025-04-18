import React from "react";

const users = [
  { name: "Yash", followers: 1200 },
  { name: "Ananya", followers: 980 },
  { name: "Ravi", followers: 870 },
];

export default function TopUsers() {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="text-xl font-semibold mb-3">👑 Top Users</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index} className="mb-2">
            <div className="flex justify-between">
              <span>{user.name}</span>
              <span className="text-gray-500">{user.followers} followers</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
