import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold shadow-lg shadow-blue-200">
                MY
              </div>
              <span className="font-bold text-gray-800 text-lg">Myshop</span>
            </div>
            <p className="text-[16px] text-gray-600 leading-relaxed">
              Your comprehensive guide to HP laser printers with integrated
              shopping. Professional buying guides, product comparisons, and
              curated selection of quality printer models.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3 text-[16px] text-gray-600">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-600 hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="hover:text-blue-600 hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-600 hover:translate-x-1 inline-block transition-all duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-600 hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3 text-[16px] text-gray-600">
              <li>
                <Link
                  to="/terms"
                  className="hover:text-blue-600 hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-blue-600 hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/refund"
                  className="hover:text-blue-600 hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="hover:text-blue-600 hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3 text-[16px] text-gray-600">
              <li>
                <a
                  href="tel:5184171344"
                  className="hover:text-blue-600 transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="text-blue-500">📞</span> (518) 417-1344
                </a>
              </li>
              <li className="text-sm text-gray-500 pl-6">
                Mon–Fri: 8am–8pm EST
              </li>
              <li>
                <a
                  href="mailto:support@myshop.com"
                  className="hover:text-blue-600 transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="text-blue-500">✉️</span> support@myshop.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=10601+Clarence+Dr+Ste+250+Frisco+TX+75033"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600 transition-colors duration-300 flex items-start gap-2"
                >
                  <span className="text-blue-500">📍</span>
                  <span>
                    10601 Clarence Dr Ste 250
                    <br />
                    Frisco, TX 75033-3867
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-2 border-gray-200 rounded-2xl bg-gradient-to-br from-gray-50 to-white p-6 text-[15px] text-gray-600 leading-relaxed shadow-sm">
          <p className="mb-3">
            <strong className="text-gray-800">Disclaimer:</strong> Myshop is an
            independent retailer and is not affiliated with, endorsed by, or
            sponsored by HP Inc. or Hewlett-Packard Company. All product images,
            logos, and trademarks are the property of their respective owners,
            including HP Inc. Product images are used for informational purposes
            only under fair use guidelines.
          </p>
          <p>
            All product information, specifications, and pricing are subject to
            change without notice. We make every effort to ensure accuracy but
            cannot guarantee that all information is complete or error-free.
            Please verify product details with the manufacturer before making a
            purchase decision.
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-[15px] text-gray-500 gap-4">
          <span className="font-medium">© 2025 Myshop. All rights reserved.</span>
          <div className="text-center md:text-right space-y-1">
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span> Free shipping on orders
                over $299
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span> Secure payment
                processing
              </span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span> Customer satisfaction
                guaranteed
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span> Easy returns within 30
                days
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
