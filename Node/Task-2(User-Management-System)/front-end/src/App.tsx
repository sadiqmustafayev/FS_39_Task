import { useEffect, useState } from "react";

type UserType = {
  id: string;
  name: string;
  email: string;
  gender: string;
  status: string;
};

const UserTable = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Xəta:", err));
  }, []);

  return (
    <div className="p-4">
      {/* New User Düyməsi */}
      <div className="mb-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          New user
        </button>
      </div>

      {/* Cədvəl */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border-b">ID</th>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Email</th>
              <th className="px-4 py-2 border-b">Gender</th>
              <th className="px-4 py-2 border-b">Status</th>
              <th className="px-4 py-2 border-b">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id || index}
                className="bg-gray-50 hover:bg-gray-100 transition"
              >
                <td className="px-4 py-2 border-b hover:text-green-600 cursor-pointer">
                  {index + 1}
                </td>
                <td className="px-4 py-2 border-b hover:text-green-600 cursor-pointer">
                  {user?.name || "N/A"}
                </td>
                <td className="px-4 py-2 border-b hover:text-green-600 cursor-pointer">
                  {user?.email || "N/A"}
                </td>
                <td className="px-4 py-2 border-b hover:text-green-600 cursor-pointer">
                  {user?.gender || "N/A"}
                </td>
                <td className="px-4 py-2 border-b hover:text-green-600 cursor-pointer">
                  {user?.status || "N/A"}
                </td>
                <td className="px-4 py-2 border-b">
                  <button className="text-blue-600 hover:underline">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
