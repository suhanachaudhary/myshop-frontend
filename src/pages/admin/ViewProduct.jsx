
import { useEffect, useState } from "react";
import {
    getAdminProducts,
    deleteProduct,
    updateDiscount,
} from "../../api/adminProductApi";
import toast from "react-hot-toast";
import EditProductModal from "./EditProductModal";


const ViewProduct = () => {
    const [products, setProducts] = useState([]);
    const [editProduct, setEditProduct] = useState(null);

    const fetchProducts = async () => {
        const res = await getAdminProducts();
        setProducts(res.data.products);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        await deleteProduct(id);
        toast.success("Product deleted");
        fetchProducts();
    };

    const handleDiscount = async (id) => {
        const discount = prompt("Enter discount %");
        if (!discount) return;

        await updateDiscount(id, Number(discount));
        toast.success("Discount updated");
        fetchProducts();
    };

    return (
        <div className="p-6 bg-white rounded-xl shadow">
            <h2 className="text-xl font-bold mb-4">View Product</h2>

            <table className="w-full text-sm border">
                <thead className="bg-gray-100">
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Stock</th>
                        <th>Category</th>
                        <th>Original Price</th>
                        <th>Discount</th>
                        <th>Discount Price</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((p) => {
                        const discountPrice =
                            p.price - (p.price * p.discount) / 100;

                        return (
                            <tr key={p._id} className="border-t text-center">
                                <td>
                                    <img src={p.image} className="w-12 mx-auto" />
                                </td>
                                <td>{p.name}</td>
                                <td>{p.stock}</td>
                                <td>{p.category}</td>
                                <td>₹{p.price}</td>
                                <td>{p.discount}%</td>
                                <td>₹{discountPrice.toFixed(2)}</td>
                                <td className="flex gap-2 justify-center py-2">
                                    <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={() => setEditProduct(p)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(p._id)}
                                        className="bg-red-500 text-white px-2 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => handleDiscount(p._id)}
                                        className="bg-indigo-500 text-white px-2 py-1 rounded"
                                    >
                                        Discount
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            {editProduct && (
                <EditProductModal
                    product={editProduct}
                    onClose={() => setEditProduct(null)}
                    refresh={fetchProducts}
                />
            )}

        </div>
    );
};

export default ViewProduct;
