
import { useState } from "react";
import toast from "react-hot-toast";
import { updateProduct } from "../../api/adminProductApi";

const EditProductModal = ({ product, onClose, refresh }) => {
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        stock: product.stock,
        discount: product.discount,
        image: null,
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleImage = (e) => {
        setForm({ ...form, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);

            const formData = new FormData();
            Object.keys(form).forEach((key) => {
                if (form[key] !== null) {
                    formData.append(key, form[key]);
                }
            });

            await updateProduct(product._id, formData);
            toast.success("Product updated");

            refresh();
            onClose();
        } catch (err) {
            toast.error("Update failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
            <div className="bg-white p-6 rounded-xl w-[450px]">
                <h2 className="text-xl font-bold mb-4">Edit Product</h2>

                <form onSubmit={handleSubmit} className="space-y-3">
                    <input name="name" value={form.name} onChange={handleChange} className="w-full border p-2 rounded" />
                    <textarea name="description" value={form.description} onChange={handleChange} className="w-full border p-2 rounded" />
                    <input name="price" type="number" value={form.price} onChange={handleChange} className="w-full border p-2 rounded" />
                    <input name="category" value={form.category} onChange={handleChange} className="w-full border p-2 rounded" />
                    <input name="stock" type="number" value={form.stock} onChange={handleChange} className="w-full border p-2 rounded" />
                    <input name="discount" type="number" value={form.discount} onChange={handleChange} className="w-full border p-2 rounded" />

                    <input type="file" onChange={handleImage} />

                    <div className="flex justify-end gap-2">
                        <button type="button" onClick={onClose} className="px-4 py-2 border rounded">
                            Cancel
                        </button>
                        <button type="submit" disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded">
                            {loading ? "Saving..." : "Update"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProductModal;
