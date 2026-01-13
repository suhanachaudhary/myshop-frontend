
import {
    Phone,
    MapPin,
    Mail,
    Info,
    Truck,
    ShoppingCart,
    HelpCircle,
} from "lucide-react";

function Contact() {
    return (
        <div className="bg-gray-50">

            <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
                <div className="max-w-6xl mx-auto px-4 py-20 text-center">
                    <h1 className="text-4xl font-bold mb-4">Contact LaserProGuide</h1>
                    <p className="max-w-3xl mx-auto text-gray-300">
                        Have questions about our HP LaserJet printers or need assistance
                        with your order? Our professional team is ready to help you find
                        the perfect printing solution.
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 py-16">
                <h1 className="text-3xl text-slate-800 font-semibold text-center mb-2">
                    Get in Touch
                </h1>
                <p className="text-center text-gray-600 mb-10">
                    Choose your preferred method to reach our team
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-white rounded-lg shadow p-6 text-center">
                        <Phone className="mx-auto mb-4 text-blue-600" size={36} />
                        <h3 className="font-semibold mb-2 text-slate-800">Call Us</h3>
                        <p className="text-sm mb-3">
                            Speak with our LaserProGuide professionals
                        </p>
                        <a
                            href="tel:15184171344"
                            className="font-medium text-blue-600 block"
                        >
                            (518) 417-1344
                        </a>
                        <p className="text-xs text-gray-500 mt-2">
                            Mon–Fri: 8:00 AM – 8:00 PM CST <br />
                            Sat–Sun: 9:00 AM – 5:00 PM CST
                        </p>
                    </div>


                    <div className="bg-white rounded-lg shadow p-6 text-center">
                        <MapPin className="mx-auto mb-4 text-blue-600" size={36} />
                        <h3 className="font-semibold mb-2 text-slate-800">Visit Our Office</h3>
                        <p className="text-sm mb-3">
                            LaserProGuide Headquarters
                        </p>
                        <p className="text-sm text-gray-600">
                            10601 Clarence Dr Ste 250 <br />
                            Frisco, TX 75033 <br />
                            United States
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                            Open: Mon–Fri, 8:00 AM – 8:00 PM CST
                        </p>
                    </div>


                    <div className="bg-white rounded-lg shadow p-6 text-center">
                        <Mail className="mx-auto mb-4 text-blue-600" size={36} />
                        <h3 className="font-semibold mb-2 text-slate-800">Email Support</h3>
                        <p className="text-sm mb-3">
                            Send us your questions anytime
                        </p>
                        <a
                            href="mailto:support@laserproguide.com"
                            className="font-medium text-blue-600 block"
                        >
                            support@laserproguide.com
                        </a>
                        <p className="text-xs text-gray-500 mt-2">
                            Priority: Within 2–4 hours <br />
                            Available 7 days a week
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white border-t border-gray-200">
                <div className="max-w-5xl mx-auto px-4 py-16">
                    <h2 className="text-2xl font-semibold text-slate-800 text-center mb-2">
                        How We Can Help
                    </h2>
                    <p className="text-center text-gray-600 mb-10">
                        LaserProGuide provides comprehensive support for all your printing needs
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex gap-4">
                            <Info className="text-blue-600" />
                            <div>
                                <h4 className="font-semibold">Product Information</h4>
                                <p className="text-sm text-gray-600">
                                    Detailed specifications, compatibility checks, and guidance.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <ShoppingCart className="text-blue-600" />
                            <div>
                                <h4 className="font-semibold">Order Assistance</h4>
                                <p className="text-sm text-gray-600">
                                    Help with orders, tracking, returns, and exchanges.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Truck className="text-blue-600" />
                            <div>
                                <h4 className="font-semibold">Shipping & Delivery</h4>
                                <p className="text-sm text-gray-600">
                                    Delivery schedules, tracking updates, and eligibility details.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <HelpCircle className="text-blue-600" />
                            <div>
                                <h4 className="font-semibold">Purchase Guidance</h4>
                                <p className="text-sm text-gray-600">
                                    Personalized recommendations and cost analysis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="bg-white rounded-lg shadow p-8">
                    <h2 className="text-xl font-semibold text-center mb-2 text-slate-800">
                        Send Us a Message
                    </h2>
                    <p className="text-center text-gray-600 mb-6">
                        Fill out the form and our team will respond within 2–4 business hours
                    </p>

                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                className="border border-gray-200 rounded px-3 py-2"
                                placeholder="Full Name *"
                            />
                            <input
                                className="border border-gray-200 rounded px-3 py-2"
                                placeholder="Email Address *"
                            />
                        </div>

                        <input
                            className="border border-gray-200 rounded px-3 py-2 w-full"
                            placeholder="Printer Model (e.g., HP LaserJet Pro MFP 3301dw)"
                        />

                        <select className="border border-gray-200 rounded px-3 py-2 w-full">
                            <option>Select inquiry type</option>
                            <option>Product Information</option>
                            <option>Order Assistance</option>
                            <option>Shipping & Delivery</option>
                            <option>Technical Support</option>
                        </select>

                        <textarea
                            className="border border-gray-200 rounded px-3 py-2 w-full h-28"
                            placeholder="Your message..."
                        />

                        <button className="w-full bg-slate-800 text-white py-3 rounded hover:bg-slate-900 transition">
                            Send Message
                        </button>
                    </form>
                    <br></br>
                    <p className="text-[16px] text-center text-gray-500 mt-4">
                        Need immediate assistance? Call us at{" "}
                        <a href="tel:15184171344" className="text-blue-600">
                            (518) 417-1344
                        </a>
                        <br />
                        Mon–Fri: 8:00 AM – 8:00 PM CST | Sat–Sun: 9:00 AM – 5:00 PM CST
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
