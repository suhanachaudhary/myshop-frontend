
import { Link } from "react-router-dom";
import {
    Plus,
    Layers,
    Eye,
    ShoppingBag,
    Users,
    UserPlus
} from "lucide-react";

const cards = [
    { title: "Add Product", icon: <Plus />, path: "/admin/add-product" },
    { title: "View Product", icon: <Eye />, path: "/admin/products" },
    { title: "Orders", icon: <ShoppingBag />, path: "/admin/orders" },
    { title: "User", icon: <Users />, path: "/admin/users" },
];

const AdminDashboard = () => {
    return (
        <div className="p-8 max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-center">
                Admin Dashboard
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {cards.map((item, index) => (
                    <Link
                        key={index}
                        to={item.path}
                        className="border rounded-xl p-6 flex flex-col items-center gap-3 hover:shadow-md transition"
                    >
                        <div className="text-blue-600">
                            {item.icon}
                        </div>
                        <p className="font-medium">{item.title}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default AdminDashboard;
