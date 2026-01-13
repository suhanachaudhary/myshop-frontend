
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 flex items-center justify-center rounded bg-blue-600 text-white font-bold">MY</div>
                            <span className="font-semibold text-gray-800">Myshop</span>
                        </div>
                        <p className="text-[16px] text-gray-600 leading-relaxed">
                            Your comprehensive guide to HP laser printers with integrated shopping.
                            Professional buying guides, product comparisons, and curated selection of quality printer models.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-800 mb-4">QUICK LINKS</h3>
                        <ul className="space-y-2 text-[16px] text-gray-600">
                            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
                            <li><Link to="/shop" className="hover:text-blue-600">Shop</Link></li>
                            <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-800 mb-4">LEGAL</h3>
                        <ul className="space-y-2 text-[16px] text-gray-600">
                            <li><Link to="/terms" className="hover:text-blue-600">Terms & Conditions</Link></li>
                            <li><Link to="/privacy" className="hover:text-blue-600">Privacy Policy</Link></li>
                            <li><Link to="/refund" className="hover:text-blue-600">Refund Policy</Link></li>
                            <li><Link to="/shipping" className="hover:text-blue-600">Shipping Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-800 mb-4">CONTACT US</h3>
                        <ul className="space-y-3 text-[16px] text-gray-600">
                            <li><a href="tel:5184171344" className="hover:text-blue-600">📞 (518) 417-1344</a></li>
                            <li className="text-xs">Mon–Fri: 8am–8pm EST</li>
                            <li><a href="mailto:support@myshop.com" className="hover:text-blue-600">✉️ support@myshop.com</a></li>
                            <li>
                                <a
                                    href="https://maps.google.com/?q=10601+Clarence+Dr+Ste+250+Frisco+TX+75033"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-blue-600"
                                >
                                    📍 10601 Clarence Dr Ste 250<br />Frisco, TX 75033-3867
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="mt-12 border rounded-lg bg-gray-50 p-6 text-[16px] text-gray-600 leading-relaxed">
                    <p className="mb-3">
                        <strong>Disclaimer:</strong> Myshop is an independent retailer and is not affiliated with, endorsed by, or sponsored by HP Inc. or Hewlett-Packard Company. All product images, logos, and trademarks are the property of their respective owners, including HP Inc. Product images are used for informational purposes only under fair use guidelines.
                    </p>
                    <p>
                        All product information, specifications, and pricing are subject to change without notice. We make every effort to ensure accuracy but cannot guarantee that all information is complete or error-free. Please verify product details with the manufacturer before making a purchase decision.
                    </p>
                </div>

                <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-[16px] text-gray-500 gap-4">
                    <span>© 2025 Myshop</span>
                    <span className="text-center md:text-right">
                        Free shipping on orders over $299 | Secure payment processing<br />
                        Customer satisfaction guaranteed | Easy returns within 30 days
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;