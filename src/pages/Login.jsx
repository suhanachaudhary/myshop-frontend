
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../api/authApi";
import toast from "react-hot-toast";

const Login = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const mergeCart = async () => {
            const token = localStorage.getItem("token");
            const localCart = JSON.parse(localStorage.getItem("cart"));

            if (!token || !localCart || localCart.length === 0) return;

            await axios.post(
                "http://localhost:3000/api/cart/merge",
                { cartItems: localCart },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            localStorage.removeItem("cart");
        };

        mergeCart();
    }, []);


    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await loginUser(formData);

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("role", res.data.role);
            localStorage.setItem("userId", res.data.user_id);

            toast.success("Login successful");

            if (res.data.role === "admin") {
                navigate("/admin");
            } else {
                navigate("/");
            }

        } catch (error) {
            toast.error(error.response?.data?.message || "Login failed");
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] mt-4 flex items-center justify-center px-4">
            <div className="w-full max-w-md">

                <Link
                    to="/"
                    className="flex items-center gap-2 text-sm text-[#475569] mb-6 hover:text-[#0F172A]"
                >
                    ← Back to Home
                </Link>

                <div className="bg-white border border-[#E5E7EB] rounded-2xl shadow-sm p-8">

                    <div className="flex justify-center mb-6">
                        <div className="w-12 h-12 rounded-xl bg-[#0F172A] text-white flex items-center justify-center font-bold">
                            MY
                        </div>
                    </div>

                    <h1 className="text-2xl font-bold text-center text-[#0F172A] mb-2">
                        Welcome Back
                    </h1>

                    <p className="text-center text-sm text-[#475569] mb-6">
                        Sign in to continue to your account
                    </p>

                    <form className="space-y-4" onSubmit={handleSubmit}>

                        <div>
                            <label className="text-sm text-[#0F172A]">Email Address</label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                onChange={handleChange}
                                className="mt-1 w-full border border-[#CBD5E1] rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0284C7]"
                                name="email"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-[#0F172A]">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                onChange={handleChange}
                                className="mt-1 w-full border border-[#CBD5E1] rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0284C7]"
                                name="password"
                            />
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 text-[#475569]">
                                <input type="checkbox" className="rounded" />
                                Remember me
                            </label>

                            <Link
                                to="/forgot-password"
                                className="text-[#0284C7] hover:underline"
                            >
                                Forgot password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#0F172A] text-white py-2.5 rounded-lg font-medium hover:bg-[#020617] transition"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="flex items-center gap-2 my-6">
                        <div className="flex-1 h-px bg-[#E5E7EB]" />
                        <span className="text-xs text-[#64748B]">New here?</span>
                        <div className="flex-1 h-px bg-[#E5E7EB]" />
                    </div>

                    <Link
                        to="/signup"
                        className="block text-center border border-[#CBD5E1] rounded-lg py-2.5 text-[16px] font-medium text-[#0F172A] hover:bg-[#F1F5F9]"
                    >
                        Create an Account
                    </Link>
                </div>

                {/* Footer */}
                <p className="text-center mb-4 text-[16px] text-[#64748B] mt-6">
                    Myshop - Your Trusted Printer Source
                </p>
            </div>
        </div>
    );
};

export default Login;
