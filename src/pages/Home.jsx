
import {
    getAdminProducts,
} from "../api/adminProductApi";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ProductCard, Button, Container } from "../components/ui";


export default function Home() {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);



    const fetchProducts = async () => {
        const res = await getAdminProducts();
        setProducts(res.data.products);
    };

    useEffect(() => {
        fetchProducts();
    }, []);


    return (
        <div className="w-full bg-gradient-to-b from-[#F6FBFF] to-white text-[#0F172A]">

            <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 items-start">
                <div>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-4 py-2 rounded-full">
                        HP LASER PRINTER RESOURCE HUB & STORE
                    </span>

                    <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold leading-tight">
                        Your Complete <span className="text-blue-600">HP Laser Printer</span> <br /> Resource & Store
                    </h1>
                    <p className="mt-5 text-[20px] text-gray-600 max-w-xl">
                        Professional guides meet curated shopping. We provide comprehensive educational resources on laser printing technology, toner economics, and best practices—then help you purchase the perfect HP LaserJet with confidence.
                    </p>
                    <br></br><br></br>
                    <div className="hidden md:flex flex-1 w-full">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search buying guides or printers.."
                                className="w-full border rounded-lg pl-10 pr-4 py-2 text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-4">
                        <Button variant="primary" size="lg">
                            Browse Buying Guides
                        </Button>
                        <Button variant="outline" size="lg" onClick={() => navigate("/shop")}>
                            Shop Printers
                        </Button>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8">

                    <div className="flex flex-col items-center justify-center">
                        <div className="w-18 h-18 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full mb-4 text-2xl">
                            🖨️
                        </div>
                        <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-4 py-2 mb-2 rounded-full">
                            WHAT WE OFFER
                        </span>

                        <h1 className="text-3xl font-bold">Complete Laser Printer Education</h1>
                        <p className="text-xl text-gray-500 mb-4">
                            From beginner basics to IT professional insights
                        </p>
                    </div>

                    <ul className="space-y-3 text-sm">
                        <p className="text-xl">Topics we cover</p>
                        <li>✔ Buying Advice</li>
                        <li>✔ Toner Economics</li>
                        <li>✔ Maintenance</li>
                        <li>✔ Technology</li>
                        <li>✔ Upgrades</li>
                    </ul>
                    <div className="mt-6 flex gap-3">
                        <Button variant="primary" size="md" className="w-full">
                            Read Guide
                        </Button>

                        <Button variant="outline" size="md" className="w-full" onClick={() => navigate("/shop")}>
                            Shop Now
                        </Button>
                    </div>
                </div>
            </section>

            <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
                <div className="max-w-6xl mx-auto px-4 py-4 text-center">
                    <h1 className="text-[16px]">🎁 Limited Time: Save up to $150 on HP Color Laser Printer Pro Series 🕕</h1>
                </div>
            </div>

            <section className="max-w-5xl mx-auto px-6 py-14 text-center">
                <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-4 py-2 mb-2 rounded-full">
                    WELCOME TO YOUR PRINTING JOURNEY
                </span>

                <h2 className="text-3xl md:text-6xl font-bold text-slate-700 mt-6">Your Complete HP Laser Printer Resource & Store</h2>

                <div className="max-w-6xl mx-auto px-4 mt-6">
                    <div className="
                        bg-white
                        border border-[#E6F0FA]
                        rounded-2xl
                        shadow-[0_20px_40px_rgba(15,23,42,0.08)]
                        px-8 py-8
                        text-[#475569]
                        text-[18px]
                        text-start
                    ">
                        Welcome to LaserProGuide, where comprehensive printer education meets curated shopping.
                        We're not just another printer store — we're your complete resource for understanding,
                        choosing, and purchasing HP laser printers with confidence.
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-4 mt-6">
                    <div className="
                        bg-white
                        border border-[#E6F0FA]
                        rounded-2xl
                        shadow-[0_20px_40px_rgba(15,23,42,0.08)]
                        px-8 py-8
                        flex gap-5
                        text-start
                    ">
                        <div className="
                        min-w-[48px] h-[48px]
                        bg-[#0EA5E9]
                        text-white
                        rounded-xl
                        flex items-center justify-center
                        shadow-md
                        ">
                            <span className="text-2xl">≡</span>
                        </div>

                        <p className="text-[#475569] text-[18px]">
                            Whether you're setting up your first home office, upgrading your small business printing
                            capabilities, or managing IT procurement for a larger organization, our platform combines
                            in-depth guides with a carefully selected catalog of HP LaserJet and OfficeJet printers.
                            We cover everything from basic buying decisions to advanced topics like toner economics,
                            maintenance schedules, and print quality optimization.
                        </p>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-4 mt-6">
                    <div className="
                        bg-white
                        border border-[#E6F0FA]
                        rounded-2xl
                        shadow-[0_18px_40px_rgba(15,23,42,0.08)]
                        px-8 py-8
                    ">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-[#0EA5E9] rounded-lg flex items-center justify-center text-white">
                                📘
                            </div>
                            <h3 className="text-xl font-semibold text-[#0F172A]">
                                What We Cover
                            </h3>
                        </div>

                        <p className="text-[#475569] text-[18px] text-start">
                            Our guides dive deep into the topics that matter: understanding laser printing technology,
                            comparing monochrome versus color options, calculating true cost per page, evaluating
                            monthly duty cycles, choosing between Pro and Enterprise models, maximizing toner
                            efficiency, performing routine maintenance, and planning for upgrades. We explain
                            duplex printing benefits, network connectivity options, mobile printing capabilities,
                            and security features — all in language that makes sense whether you're a beginner
                            or an IT professional.
                        </p>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-4 mt-6">
                    <div className="
                        bg-white
                        border border-[#E6F0FA]
                        rounded-2xl
                        shadow-[0_18px_40px_rgba(15,23,42,0.08)]
                        px-8 py-8
                    ">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-[#0EA5E9] rounded-lg flex items-center justify-center text-white">
                                👥
                            </div>
                            <h3 className="text-xl font-semibold text-[#0F172A]">
                                Who We Serve
                            </h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: "Beginners",
                                    desc: "who need clear explanations without technical jargon",
                                },
                                {
                                    title: "Home Office Workers",
                                    desc: "seeking reliable, cost-effective printing solutions",
                                },
                                {
                                    title: "Small Business Owners",
                                    desc: "balancing performance needs with budget constraints",
                                },
                                {
                                    title: "IT Professionals",
                                    desc: "looking for detailed specifications, fleet management insights, and enterprise deployment guidance",
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="
                                    border border-[#EEF5FB]
                                    rounded-xl
                                    p-5
                                    bg-white
                                    hover:shadow-md
                                    transition
                                "
                                >
                                    <h4 className="text-xl font-semibold text-[#0EA5E9]">
                                        {item.title}
                                    </h4>
                                    <p className="text-[16px] text-[#64748B] mt-1">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <p className="text-[16px] text-[#64748B] mt-6 text-start">
                            No matter your experience level, our content adapts to provide the depth of information you need.
                        </p>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-4 mt-6">
                    <div className="
                        bg-white
                        border border-[#E6F0FA]
                        rounded-2xl
                        shadow-[0_20px_40px_rgba(15,23,42,0.08)]
                        px-8 py-8
                        flex gap-5
                        text-start
                    ">
                        <div className="
                        min-w-[48px] h-[48px]
                        bg-[#0EA5E9]
                        text-white
                        rounded-xl
                        flex items-center justify-center
                        shadow-md
                        ">
                            <span className="text-2xl">🥈</span>
                        </div>

                        <p className="text-[#475569] text-[18px]">
                            Every guide we publish starts with real questions from real users, ensuring our content addresses actual needs rather than theoretical scenarios. We test recommendations, verify specifications, and update our advice as new models and technologies emerge. This commitment to practical, accurate information makes LaserProGuide the trusted starting point for your printer purchase journey.
                        </p>
                    </div>
                </div>

            </section>

            {/* mission section */}
            <section className="w-full bg-gradient-to-b from-[#0B82B8] to-[#0A78AA] py-14">
                <div className="max-w-4xl mx-auto px-6 text-center text-white">

                    <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-white/20 flex items-center justify-center">
                        <div className="w-7 h-7 border-2 border-white rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-full" />
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Our Mission
                    </h2>

                    <p className="text-base md:text-lg leading-relaxed text-white/95">
                        LaserProGuide was built to eliminate the confusion that comes with purchasing printing
                        technology. We combine in-depth educational content with a carefully curated product
                        catalog, ensuring you understand exactly what you're buying before you commit.
                    </p>
                </div>
            </section>

            {/* offer section */}
            <section className="bg-[#F8FAFC] py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A]">
                            What We Offer
                        </h2>
                        <p className="mt-3 text-[#475569]">
                            Everything you need to make an informed printer purchase decision
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="
                            bg-white
                            border border-[#E6F0FA]
                            rounded-2xl
                            shadow-[0_20px_40px_rgba(15,23,42,0.08)]
                            p-8
                        ">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-[#2563EB] rounded-xl flex items-center justify-center text-white text-2xl">
                                    📘
                                </div>
                                <h3 className="text-2xl font-semibold text-[#0F172A]">
                                    Educational Guides & Resources
                                </h3>
                            </div>

                            <p className="text-[#475569] text-[16px] leading-relaxed">
                                Access 30+ comprehensive guides covering every aspect of HP laser printers. We explain
                                printer technology, compare models, analyze costs, and share maintenance tips. Our guides
                                help you understand print speeds, duty cycles, toner yields, and total cost of ownership
                                in plain language.
                            </p>

                            <p className="text-[#475569] text-[16px] leading-relaxed mt-4">
                                From choosing between color vs monochrome to understanding Enterprise features, our
                                educational content ensures you make informed decisions before purchasing from our
                                carefully curated printer store.
                            </p>
                        </div>

                        <div className="
                            bg-white
                            border border-[#E6F0FA]
                            rounded-2xl
                            shadow-[0_20px_40px_rgba(15,23,42,0.08)]
                            p-8
                        ">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-[#22C55E] rounded-xl flex items-center justify-center text-white text-2xl">
                                    🛒
                                </div>
                                <h3 className="text-2xl font-semibold text-[#0F172A]">
                                    HP Printer Store & Shopping
                                </h3>
                            </div>

                            <p className="text-[#475569] text-[16px] leading-relaxed">
                                Shop our extensive collection of genuine HP LaserJet and OfficeJet printers. Every
                                product includes detailed specifications, real pricing with no hidden fees, multiple
                                product images, and authentic customer reviews to help you make confident purchases.
                            </p>

                            <p className="text-[#475569] text-[16px] leading-relaxed mt-4">
                                Our store features easy filtering by price, features, and print volume. Purchase directly
                                with secure checkout, manufacturer warranties, fast shipping, and free delivery on orders
                                over $299. We stock the latest HP models alongside proven favorites.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* set us apart section */}
            <section className="bg-gradient-to-b from-[#0B1220] to-[#0E1628] py-20">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-5xl font-bold text-white">
                            What Sets Us Apart
                        </h2>
                        <div className="w-12 h-1 bg-[#22D3EE] mx-auto mt-4 rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="
                            bg-[#1F2937]
                            rounded-2xl
                            p-8
                            shadow-[0_20px_40px_rgba(0,0,0,0.4)]
                        ">
                            <div className="w-10 h-10 mb-4 rounded-full border-2 border-[#4ADE80] flex items-center justify-center text-[#4ADE80] text-2xl">
                                ✓
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                Education First
                            </h3>
                            <p className="text-[#CBD5E1] text-[16px] leading-relaxed">
                                Unlike traditional electronics retailers that simply list products, we focus on
                                education and customer empowerment. Informed customers make better purchasing decisions.
                            </p>
                        </div>

                        <div className="
                            bg-[#1F2937]
                            rounded-2xl
                            p-8
                            shadow-[0_20px_40px_rgba(0,0,0,0.4)]
                        ">
                            <div className="w-10 h-10 mb-4 rounded-full border-2 border-[#4ADE80] flex items-center justify-center text-[#4ADE80] text-2xl">
                                ✓
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                Honest Assessments
                            </h3>
                            <p className="text-[#CBD5E1] text-[16px] leading-relaxed">
                                Our platform features honest assessments of each printer's strengths and limitations,
                                real-world use case scenarios, and transparent total cost of ownership calculations.
                            </p>
                        </div>

                        <div className="
                            bg-[#1F2937]
                            rounded-2xl
                            p-8
                            shadow-[0_20px_40px_rgba(0,0,0,0.4)]
                        ">
                            <div className="w-10 h-10 mb-4 rounded-full border-2 border-[#4ADE80] flex items-center justify-center text-[#4ADE80] text-2xl">
                                ✓
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                Complete Transparency
                            </h3>
                            <p className="text-[#CBD5E1] text-[16px] leading-relaxed">
                                Competitive pricing with no hidden fees, no surprise charges at checkout. Secure payment
                                options and knowledgeable customer service ready to assist.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* commitment */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="
                        bg-gradient-to-b from-[#F0FAFF] to-[#EAF7FF]
                        border border-[#BFE6FF]
                        rounded-3xl
                        shadow-[0_25px_60px_rgba(15,23,42,0.12)]
                        px-8 md:px-14 py-14
                        ">

                        <div className="w-14 h-14 mx-auto mb-6 bg-[#0284C7] rounded-2xl flex items-center justify-center text-white text-3xl">
                            ♥
                        </div>

                        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0F172A]">
                            Our Commitment to You
                        </h2>
                        <div className="w-16 h-[3px] bg-[#0284C7] mx-auto mt-3 mb-12 rounded-full" />

                        <div className="grid md:grid-cols-2 gap-x-14 gap-y-8 text-sm">

                            <div className="flex gap-4">
                                <span className="w-19 h-10 mb-4 rounded-full border-2 border-[#4ADE80] flex items-center justify-center text-[#4ADE80] text-2xl">✓</span>
                                <p className="text-[#334155] leading-relaxed text-[16px]">
                                    <span className="font-semibold text-xl text-[#0F172A]">Genuine HP Products:</span>{" "}
                                    We offer authentic HP equipment with original manufacturer warranties and specifications.
                                </p>
                            </div>

                            <div className="flex gap-4">
                                <span className="w-16 h-10 mb-4 rounded-full border-2 border-[#4ADE80] flex items-center justify-center text-[#4ADE80] text-2xl">✓</span>
                                <p className="text-[#334155] leading-relaxed text-[16px]">
                                    <span className="font-semibold text-xl text-[#0F172A]">Transparent Pricing:</span>{" "}
                                    Competitive rates with no hidden fees or surprise charges at checkout.
                                </p>
                            </div>

                            <div className="flex gap-4">
                                <span className="w-19 h-10 mb-4 rounded-full border-2 border-[#4ADE80] flex items-center justify-center text-[#4ADE80] text-2xl">✓</span>
                                <p className="text-[#334155] leading-relaxed text-[16px]">
                                    <span className="font-semibold text-xl text-[#0F172A]">Reliable Fulfillment:</span>{" "}
                                    Secure payment options with order tracking information provided for every purchase.
                                </p>
                            </div>

                            <div className="flex gap-4">
                                <span className="w-22 h-10 mb-4 rounded-full border-2 border-[#4ADE80] flex items-center justify-center text-[#4ADE80] text-2xl">✓</span>
                                <p className="text-[#334155] leading-relaxed text-[16px]">
                                    <span className="font-semibold text-xl text-[#0F172A]">Professional Guides:</span>{" "}
                                    Comprehensive educational resources to help you make informed decisions throughout your buying journey.
                                </p>
                            </div>

                        </div>

                        <p className="text-center text-[#475569] text-[16px] mt-12 max-w-4xl mx-auto leading-relaxed">
                            Whether you're purchasing your first home office printer or upgrading an entire corporate print fleet,
                            <span className="font-semibold text-[#0F172A]"> LaserProGuide provides the guidance, selection, and service</span>{" "}
                            you need for a confident purchasing experience.
                        </p>
                    </div>
                </div>
            </section>

            {/* laser pro guide works */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="flex justify-center mb-4">
                        <span className="text-xs font-semibold tracking-wide text-[#0284C7] bg-[#E0F2FE] px-4 py-2 rounded-full">
                            YOUR BUYING JOURNEY
                        </span>
                    </div>

                    <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0F172A]">
                        How LaserProGuide Works
                    </h2>
                    <p className="text-center text-[18px] text-[#475569] mt-3 mb-14">
                        From research to purchase in three simple steps
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="
                            relative
                            bg-white
                            border-2 border-[#E6F0FA]
                            hover:border-blue-400
                            rounded-2xl
                            p-8
                            shadow-[0_20px_40px_rgba(15,23,42,0.08)]
                        ">
                            <div className="absolute -top-5 left-6 w-12 h-12 bg-[#0284C7] text-white rounded-full flex items-center justify-center font-semibold text-2xl">
                                1
                            </div>

                            <div className="w-14 h-14 mb-6 mt-4 bg-[#E0F2FE] rounded-xl flex items-center justify-center text-[#0284C7] text-2xl">
                                🔍
                            </div>

                            <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
                                Explore Products
                            </h3>

                            <p className="text-[#475569] text-[16px] leading-relaxed">
                                Browse our product catalog to understand printer features, compare technologies,
                                and learn which specifications matter for your needs.
                            </p>
                        </div>

                        <div className="
                            relative
                            bg-white
                            border-2 border-[#E6F0FA]
                            hover:border-blue-400
                            rounded-2xl
                            p-8
                            shadow-[0_20px_40px_rgba(15,23,42,0.08)]
                        ">
                            <div className="absolute -top-5 left-6 w-12 h-12 bg-[#0284C7] text-white rounded-full flex items-center justify-center font-semibold text-2xl">
                                2
                            </div>

                            <div className="w-14 h-14 mb-6 mt-4 bg-[#E0F2FE] rounded-xl flex items-center justify-center text-[#0284C7] text-2xl">
                                🎯
                            </div>

                            <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
                                Compare Options
                            </h3>

                            <p className="text-[#475569] text-[16px] leading-relaxed">
                                Use our product catalog to filter by features, compare specifications, and review
                                detailed information about each HP printer model.
                            </p>
                        </div>

                        <div className="
                            relative
                            bg-white
                            border-2 border-[#E6F0FA]
                            hover:border-blue-400
                            rounded-2xl
                            p-8
                            shadow-[0_20px_40px_rgba(15,23,42,0.08)]
                        ">
                            <div className="absolute -top-5 left-6 w-12 h-12 bg-[#0284C7] text-white rounded-full flex items-center justify-center font-semibold text-2xl">
                                3
                            </div>

                            <div className="w-14 h-14 mb-6 mt-4 bg-[#E0F2FE] rounded-xl flex items-center justify-center text-[#0284C7] text-2xl">
                                🛒
                            </div>

                            <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
                                Purchase with Confidence
                            </h3>

                            <p className="text-[#475569] text-[16px] leading-relaxed">
                                Buy directly with transparent pricing, free shipping on orders over $299, and
                                the security of original manufacturer warranties.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* helpful resources */}
            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="flex justify-center mb-4">
                        <span className="text-xs font-semibold tracking-wide text-[#0284C7] bg-[#E0F2FE] px-4 py-2 rounded-full">
                            HELPFUL RESOURCES
                        </span>
                    </div>

                    <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0F172A]">
                        Popular Guides
                    </h2>
                    <p className="text-center text-[#475569] mt-3 mb-14 text-[16px]">
                        Start here for essential knowledge about HP laser printers
                    </p>

                    {/* Cards grid */}
                    <div className="grid md:grid-cols-3 gap-6 mb-14">

                        {/* Card 1 */}
                        <div className="border-2 border-[#E6F0FA] hover:border-blue-300 rounded-2xl p-6 bg-white shadow-sm">
                            <div className="w-12 h-12 bg-[#0284C7] text-white rounded-xl flex items-center justify-center mb-4 text-2xl">
                                📘
                            </div>
                            <h3 className="font-semibold hover:text-blue-600 text-[#0F172A] text-[16px] mb-2">
                                How to Choose the Right HP Laser Printer
                            </h3>
                            <p className="text-sm text-[#475569] leading-relaxed">
                                Complete buying guide covering print volume needs, monochrome vs color
                                decisions, and total cost of ownership calculations.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="border-2 hover:border-blue-300 border-[#E6F0FA] rounded-2xl p-6 bg-white shadow-sm">
                            <div className="w-12 h-12 bg-[#22C55E] text-white rounded-xl flex items-center justify-center mb-4 text-2xl">
                                📈
                            </div>
                            <h3 className="font-semibold hover:text-blue-600 text-[#0F172A] mb-2">
                                Understanding Toner Page Yield & Cost
                            </h3>
                            <p className="text-sm text-[#475569] leading-relaxed">
                                Learn how page yield works, standard vs high-yield cartridges, and how to
                                calculate your true printing costs.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="border-2 hover:border-blue-300 border-[#E6F0FA] rounded-2xl p-6 bg-white shadow-sm">
                            <div className="w-12 h-12 bg-[#A855F7] text-white rounded-xl flex items-center justify-center mb-4 text-2xl">
                                🧾
                            </div>
                            <h3 className="font-semibold hover:text-blue-600 text-[#0F172A] mb-2">
                                LaserJet Pro vs Enterprise Comparison
                            </h3>
                            <p className="text-sm text-[#475569] leading-relaxed">
                                Detailed breakdown of features, durability, and performance differences
                                between Pro and Enterprise series.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="border-2 hover:border-blue-300 border-[#E6F0FA] rounded-2xl p-6 bg-white shadow-sm">
                            <div className="w-12 h-12 bg-[#F97316] text-white rounded-xl flex items-center justify-center mb-4 text-2xl">
                                🔧
                            </div>
                            <h3 className="font-semibold hover:text-blue-600 text-[#0F172A] mb-2">
                                LaserJet Maintenance Kit Guide
                            </h3>
                            <p className="text-sm text-[#475569] leading-relaxed">
                                When to replace maintenance kits, what's included, and how proper
                                maintenance extends printer lifespan.
                            </p>
                        </div>

                        {/* Card 5 */}
                        <div className="border-2 hover:border-blue-300 border-[#E6F0FA] rounded-2xl p-6 bg-white shadow-sm">
                            <div className="w-12 h-12 bg-[#6366F1] text-white rounded-xl flex items-center justify-center mb-4 text-2xl">
                                📶
                            </div>
                            <h3 className="font-semibold text-[#0F172A] mb-2 hover:text-blue-600">
                                Mobile & Cloud Printing Setup
                            </h3>
                            <p className="text-sm text-[#475569] leading-relaxed">
                                Connect your HP LaserJet to smartphones, tablets, and cloud services
                                for printing from anywhere.
                            </p>
                        </div>

                        {/* View All */}
                        <div className="
                            border-2 border-dashed border-[#93C5FD]
                            rounded-2xl p-6
                            flex flex-col items-center justify-center
                            text-center
                            bg-[#F8FAFC]
                        ">
                            <div className="w-12 h-12 bg-[#E0F2FE] text-[#0284C7] rounded-full flex items-center justify-center mb-4">
                                ➜
                            </div>
                            <h3 className="font-semibold text-[#0F172A] mb-1">
                                View All 30 Guides
                            </h3>
                            <p className="text-sm text-[#475569]">
                                Explore our complete library
                            </p>
                        </div>

                    </div>

                    {/* Bottom text */}
                    <p className="text-center text-[18px] text-[#475569] max-w-4xl mx-auto mb-10">
                        Ready to make an informed purchase? <span className="font-medium text-[#0F172A]">
                            Explore our educational resources</span> to understand your needs, then
                        <span className="font-medium text-[#0F172A]"> browse our printer selection</span>
                        to find the perfect HP LaserJet for your requirements.
                    </p>

                    {/* CTA buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button variant="primary" size="lg">
                            Start with Our Buying Guide
                        </Button>
                        <Button variant="outline" size="lg" onClick={() => navigate("/shop")}>
                            Browse Our Printer Selection
                        </Button>
                    </div>

                </div>
            </section>


            <section className="bg-[#F8FAFC] py-20">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Badge */}
                    <div className="flex justify-center mb-4">
                        <span className="text-xs font-semibold tracking-wide text-[#0284C7] bg-[#E0F2FE] px-4 py-2 rounded-full">
                            BESTSELLERS
                        </span>
                    </div>

                    <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0F172A]">
                        Best Color Laser Printer & Top Laser Printers Collection
                    </h2>

                    <p className="text-center text-[#475569] mt-3 mb-14 max-w-3xl mx-auto">
                        Shop the best color laser printer for home and office. Find top laser
                        printers, color laser printer all in one models, and laser printer
                        for home solutions with professional HP color laser printers.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">

                        {products.slice(0, 3).map((product, index) => {
                            const discount = product.discount || 0;
                            const hasDiscount = discount > 0;

                            const oldPrice = hasDiscount
                                ? Math.round(product.price / (1 - discount / 100))
                                : product.price;

                            return (
                                <div
                                    key={product._id}
                                    className="group bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-6 text-center hover:shadow-2xl hover:border-blue-300 transition-all duration-300 animate-slideInUp"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {hasDiscount ? (
                                        <span className="inline-block text-xs font-bold text-white bg-gradient-to-r from-red-500 to-red-600 px-3 py-1.5 rounded-full mb-4 shadow-md">
                                            {discount}% OFF
                                        </span>
                                    ) : (
                                        <span className="inline-block text-xs font-bold text-white bg-gradient-to-r from-blue-500 to-blue-600 px-3 py-1.5 rounded-full mb-4 shadow-md">
                                            NEW
                                        </span>
                                    )}

                                    <Link
                                        to={`/product/${product._id}`}
                                        className="block bg-gradient-to-br from-gray-50 to-white group-hover:from-blue-50 group-hover:to-blue-100 rounded-xl p-4 transition-all duration-300"
                                    >
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="mx-auto h-40 object-contain mb-4 group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </Link>

                                    <div className="flex justify-center text-yellow-400 mb-3 text-xl">
                                        ★★★★★
                                    </div>

                                    <h3 className="font-bold text-[#0F172A] mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                        {product.name}
                                    </h3>

                                    <div className="mb-3">
                                        <p className="text-2xl font-bold text-blue-600 mb-1">
                                            ${product.price.toFixed(2)}
                                        </p>

                                        {hasDiscount && (
                                            <p className="text-sm text-[#64748B] line-through">
                                                ${oldPrice.toFixed(2)}
                                            </p>
                                        )}
                                    </div>

                                    <span
                                        className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full mb-4 ${product.stock > 0
                                            ? "text-green-600 bg-green-100"
                                            : "text-red-600 bg-red-100"
                                            }`}
                                    >
                                        {product.stock > 0 ? "✓ In Stock" : "✗ Out of Stock"}
                                    </span>

                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                                    >
                                        🛒 Add to Cart
                                    </button>
                                </div>
                            )
                        })}
                    </div>

                    {/* View All */}
                    <div className="flex justify-center">
                        <Button variant="primary" size="lg" onClick={() => navigate("/shop")}>
                            View All Products →
                        </Button>
                    </div>

                </div>
            </section>

            {/* Top Dark Features Bar */}
            <section className="bg-gradient-to-b from-[#0B1220] to-[#0F172A] py-14">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

                        <div>
                            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#1E293B] flex items-center justify-center text-white text-xl hover:text-2xl hover:w-14 hover:h-14">
                                🛡️
                            </div>
                            <h4 className="text-white font-semibold mb-1">
                                Original OEM Warranty
                            </h4>
                            <p className="text-sm text-slate-400">
                                Comprehensive protection on all HP models
                            </p>
                        </div>

                        <div>
                            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#1E293B] flex items-center justify-center text-white text-xl hover:text-2xl hover:w-14 hover:h-14">
                                🚚
                            </div>
                            <h4 className="text-white font-semibold mb-1">
                                Free Shipping
                            </h4>
                            <p className="text-sm text-slate-400">
                                Next-day delivery on orders over $299
                            </p>
                        </div>

                        <div>
                            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#1E293B] flex items-center justify-center text-white text-xl hover:text-2xl hover:w-14 hover:h-14">
                                💳
                            </div>
                            <h4 className="text-white font-semibold mb-1">
                                Flexible Payment
                            </h4>
                            <p className="text-sm text-slate-400">
                                0% financing available for qualified businesses
                            </p>
                        </div>

                        <div>
                            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#1E293B] flex items-center justify-center text-white text-xl hover:text-2xl hover:w-14 hover:h-14">
                                🛒
                            </div>
                            <h4 className="text-white font-semibold mb-1">
                                Easy Shopping
                            </h4>
                            <p className="text-sm text-slate-400">
                                Simple checkout with secure payment processing
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Shop By Category */}
            <section className="bg-[#F8FAFC] py-20">
                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-center text-3xl font-bold text-[#0F172A]">
                        Shop by Category
                    </h2>

                    <p className="text-center text-[#475569] mt-3 mb-14">
                        Find the perfect HP LaserJet printer for your specific needs
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">

                        {/* Card 1 */}
                        <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] p-4 text-center hover:shadow-lg">
                            <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center text-2xl">
                                📦
                            </div>

                            <h3 className="font-semibold hover:text-slate-900 text-[#0F172A] mb-1 text-xl">
                                Small Office
                            </h3>

                            <p className="text-sm text-[#64748B] mb-2">
                                Perfect for 5–15 users
                            </p>

                            <p className="text-sm text-[#475569] mb-6">
                                Starting from $189
                            </p>

                            <button className="w-full border-2 border-gray-300 hover:border-blue-500 text-[#0F172A] py-2.5 rounded-xl font-semibold hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2" onClick={() => navigate("/shop")}>
                                View Models →
                            </button>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] p-4 text-center hover:shadow-lg">
                            <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center text-2xl">
                                📈
                            </div>

                            <h3 className="font-semibold text-[#0F172A] hover:text-slate-900 mb-1 text-xl">
                                Enterprise
                            </h3>

                            <p className="text-sm text-[#64748B] mb-2">
                                High-volume printing
                            </p>

                            <p className="text-sm text-[#475569] mb-6">
                                Starting from $399
                            </p>

                            <button className="w-full border-2 border-gray-300 hover:border-blue-500 text-[#0F172A] py-2.5 rounded-xl font-semibold hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2" onClick={() => navigate("/shop")}>
                                View Models →
                            </button>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] p-4 text-center hover:shadow-lg">
                            <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-[#F3E8FF] text-[#9333EA] flex items-center justify-center text-2xl">
                                👁️
                            </div>

                            <h3 className="font-semibold text-[#0F172A] hover:text-slate-900 mb-1 text-xl">
                                Home Office
                            </h3>

                            <p className="text-sm text-[#64748B] mb-2">
                                Compact & efficient
                            </p>

                            <p className="text-sm text-[#475569] mb-6">
                                Starting from $139
                            </p>

                            <button className="w-full border-2 border-gray-300 hover:border-blue-500 text-[#0F172A] py-2.5 rounded-xl font-semibold hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2" onClick={() => navigate("/shop")}>
                                View Models →
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            <section className="bg-[#F8FAFC] py-10">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0F172A]">
                        Why Choose LaserProGuide?
                    </h2>

                    <p className="text-center text-[#475569] mt-3 mb-14 max-w-2xl mx-auto">
                        Your trusted online destination for HP LaserJet printers with
                        competitive pricing and fast delivery
                    </p>

                    {/* Cards */}
                    <div className="grid md:grid-cols-3 gap-8">

                        {/* Card 1 */}
                        <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] p-8 text-center">
                            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-[#E0F2FE] flex items-center justify-center text-[#0284C7] text-2xl">
                                📦
                            </div>

                            <h3 className="font-semibold text-[#0F172A] mb-2 text-xl">
                                Wide Selection
                            </h3>

                            <p className="text-sm text-[#475569] leading-relaxed">
                                Extensive catalog of HP LaserJet printers for every
                                need and budget
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] p-8 text-center">
                            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-[#E0F2FE] flex items-center justify-center text-[#0284C7] text-2xl">
                                🚚
                            </div>

                            <h3 className="font-semibold text-[#0F172A] mb-2 text-xl">
                                Fast Shipping
                            </h3>

                            <p className="text-sm text-[#475569] leading-relaxed">
                                Quick delivery with free shipping on orders
                                over $299
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] p-8 text-center">
                            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-[#E0F2FE] flex items-center justify-center text-[#0284C7] text-2xl">
                                ✔️
                            </div>

                            <h3 className="font-semibold text-[#0F172A] mb-2 text-xl">
                                Best Prices
                            </h3>

                            <p className="text-sm text-[#475569] leading-relaxed">
                                Competitive pricing with price match guarantee
                                on all printers
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="bg-[#F8FAFC] py-10">
                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0F172A]">
                        What Our Customers Say
                    </h2>

                    <p className="text-center text-[#475569] mt-3 mb-14 max-w-2xl mx-auto">
                        Read what our customers say about their experience with LaserProGuide
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">

                        {/* Card 1 */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5E7EB]">
                            <div className="flex text-yellow-400 mb-4 text-xl">★★★★★</div>

                            <p className="text-[#475569] text-[16px] leading-relaxed mb-6">
                                "Received our HP LaserJet printer quickly and the price was
                                unbeatable. Great online shopping experience from LaserProGuide."
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-semibold text-[16px]">
                                    JS
                                </div>
                                <div>
                                    <p className="font-semibold text-[#0F172A] text-sm">
                                        John Smith
                                    </p>
                                    <p className="text-xs text-[#64748B]">
                                        IT Manager, TechCorp
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5E7EB]">
                            <div className="flex text-yellow-400 mb-4 text-xl">★★★★★</div>

                            <p className="text-[#475569] text-[16px] leading-relaxed mb-6">
                                "The HP LaserJet we purchased works perfectly. Great prices,
                                fast delivery, and easy ordering process. Highly recommend!"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-semibold text-[16px]">
                                    MJ
                                </div>
                                <div>
                                    <p className="font-semibold text-[#0F172A] text-sm">
                                        Maria Johnson
                                    </p>
                                    <p className="text-xs text-[#64748B]">
                                        Owner, Print Solutions LLC
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5E7EB]">
                            <div className="flex text-yellow-400 mb-4 text-xl">★★★★★</div>

                            <p className="text-[#475569] text-[16px] leading-relaxed mb-6">
                                "Excellent selection of HP LaserJet printers at competitive prices.
                                Fast shipping and our new printer arrived in perfect condition."
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#9333EA] text-white flex items-center justify-center font-semibold text-[16px]">
                                    RW
                                </div>
                                <div>
                                    <p className="font-semibold text-[#0F172A] text-sm">
                                        Robert Wilson
                                    </p>
                                    <p className="text-xs text-[#64748B]">
                                        CTO, StartupXYZ
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="relative bg-gradient-to-br from-[#0B1220] via-[#0F172A] to-[#020617] py-16 overflow-hidden">
                <div className="max-w-5xl mx-auto px-6 text-center">

                    <div className="flex justify-center mb-6">
                        <span className="text-xs font-semibold tracking-wide text-[#0F172A] bg-[#FACC15] px-4 py-2 rounded-full">
                            LIMITED TIME OFFER
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                        Ready to Upgrade Your Printing <br className="hidden md:block" />
                        Experience?
                    </h2>

                    <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
                        Get professional-grade HP LaserJet printers with free shipping
                        on orders over $299 and competitive pricing.
                    </p>

                    <div className="flex justify-center mb-10">
                        <Button 
                            variant="primary" 
                            size="lg" 
                            onClick={() => navigate("/shop")}
                            className="bg-white hover:bg-gray-50 text-[#0F172A] hover:text-[#0F172A] shadow-2xl"
                        >
                            🛒 Shop Printers Now
                        </Button>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-8 text-sm text-slate-200">
                        <div className="flex items-center gap-2 text-[16px]">
                            <span className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xl">
                                ✓
                            </span>
                            Free shipping on orders over $299
                        </div>

                        <div className="flex items-center gap-2 text-[16px]">
                            <span className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xl">
                                ✓
                            </span>
                            Original OEM warranty included
                        </div>
                    </div>

                </div>
            </section>



        </div>
    );
}
