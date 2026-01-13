
import { useState, useRef } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const AddProduct = () => {
    const [loading, setLoading] = useState(false);

    const fileInputRef = useRef(null);

    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
        stock: "",
        image: "",
    });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleImage = (e) => {
        setProduct({ ...product, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!product.image) {
            toast.error("Image required");
            return;
        }

        try {
            setLoading(true);

            const formData = new FormData();
            formData.append("name", product.name);
            formData.append("description", product.description);
            formData.append("price", product.price);
            formData.append("category", product.category);
            formData.append("stock", product.stock);
            formData.append("image", product.image);

            await axios.post(
                "http://localhost:3000/api/admin/add-product",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            toast.success("Product added successfully");

            setProduct({
                name: "",
                description: "",
                price: "",
                category: "",
                stock: "",
                image: "",
            });

            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }

        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to add product");
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto mt-10 mb-6 bg-white p-8 rounded-2xl shadow">
            <h2 className="text-2xl font-bold mb-6">Add Product</h2>

            <form onSubmit={handleSubmit} className="space-y-4">

                <input
                    type="text"
                    placeholder="Product Name"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                />

                <textarea
                    placeholder="Description"
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                />

                <input
                    type="number"
                    placeholder="Price"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                />

                <input
                    type="text"
                    placeholder="Category"
                    name="category"
                    value={product.category}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                />

                <input
                    type="number"
                    placeholder="Stock"
                    name="stock"
                    value={product.stock}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                />

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImage}
                    className="w-full"
                    ref={fileInputRef}
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white py-3 rounded"
                >
                    {loading ? "Uploading..." : "Add Product"}
                </button>

            </form>
        </div>
    );
};

export default AddProduct;
