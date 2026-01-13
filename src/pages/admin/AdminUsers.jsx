
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getAllUsers, deleteUser } from "../../api/adminProductApi";

const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        try {
            const res = await getAllUsers();
            setUsers(res.data.users);
        } catch {
            toast.error("Failed to load users");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this user?")) return;

        try {
            await deleteUser(id);
            toast.success("User deleted");
            fetchUsers();
        } catch {
            toast.error("Delete failed");
        }
    };

    if (loading) return <p className="text-center mt-10">Loading...</p>;

    return (
        <div className="max-w-6xl mx-auto mt-10 bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4">All Users</h2>

            <table className="w-full border">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Email</th>
                        <th className="border p-2">Created</th>
                        <th className="border p-2">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((u) => (
                        <tr key={u._id} className="text-center">
                            <td className="border p-2">{u.firstName} {u.lastName}</td>
                            <td className="border p-2">{u.email}</td>
                            <td className="border p-2">
                                {new Date(u.createdAt).toLocaleDateString()}
                            </td>
                            <td className="border p-2">
                                <button
                                    onClick={() => handleDelete(u._id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminUsers;
