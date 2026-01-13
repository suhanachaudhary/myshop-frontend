
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../api/authApi";
import toast from "react-hot-toast";

const Signup = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await signupUser(formData);
            console.log(res);
            toast.success("Account created successfully!");
            navigate("/login");
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.error || "Signup failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen mt-4 bg-[#F8FAFC] flex items-center justify-center px-4">
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
                        Create Your Account
                    </h1>

                    <p className="text-center text-sm text-[#475569] mb-6">
                        Create an account to track orders and access exclusive deals
                    </p>

                    <form className="space-y-4" onSubmit={handleSubmit}>

                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="text-sm text-[#0F172A]">First Name</label>
                                <input
                                    type="text"
                                    placeholder="John"
                                    onChange={handleChange}
                                    className="mt-1 w-full border border-[#CBD5E1] rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0284C7]"
                                    name="firstName"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-[#0F172A]">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Doe"
                                    onChange={handleChange}
                                    className="mt-1 w-full border border-[#CBD5E1] rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0284C7]"
                                    name="lastName"
                                />
                            </div>
                        </div>

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
                                placeholder="At least 6 characters"
                                onChange={handleChange}
                                className="mt-1 w-full border border-[#CBD5E1] rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0284C7]"
                                name="password"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#0F172A] text-white py-2.5 rounded-lg font-medium hover:bg-[#020617] transition"
                        >
                            Create Account
                        </button>
                    </form>

                    <div className="flex items-center gap-2 my-6">
                        <div className="flex-1 h-px bg-[#E5E7EB]" />
                        <span className="text-xs text-[#64748B]">Already have an account?</span>
                        <div className="flex-1 h-px bg-[#E5E7EB]" />
                    </div>

                    <Link
                        to="/login"
                        className="block text-center border border-[#CBD5E1] rounded-lg py-2.5 text-[16px] font-medium text-[#0F172A] hover:bg-[#F1F5F9]"
                    >
                        Sign In Instead
                    </Link>
                </div>

                <p className="text-center mb-4 text-[16px] text-[#64748B] mt-6">
                    Myshop - Your Trusted Printer Source
                </p>
            </div>
        </div>
    );
};

export default Signup;
