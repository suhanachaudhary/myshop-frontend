
import { ShieldCheck, Users, BadgeCheck } from "lucide-react";

function About() {
    return (
        <div className="bg-white">

            <div className="bg-gray-50 border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <h1 className="text-4xl font-bold text-center">About Us</h1>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 py-16 space-y-16 text-gray-700 leading-relaxed">

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
                    <p className="mb-4">
                        <strong>LaserProGuide</strong> is an online platform specializing in HP
                        laser printers, providing both educational resources and direct
                        purchasing options. We are based in the United States and serve
                        customers nationwide who need reliable printing solutions.
                    </p>
                    <p className="mb-4">
                        We combine expertise in online retail and printing technology to help
                        customers make informed decisions when purchasing laser printers for
                        their homes or businesses. Our focus is on HP LaserJet and OfficeJet
                        series printers, which represent the gold standard in laser printing
                        technology.
                    </p>
                    <p>
                        As an independent retailer, we maintain complete objectivity in our
                        educational content while offering competitive pricing on genuine HP
                        products. We are not affiliated with HP Inc., allowing us to provide
                        unbiased comparisons and honest assessments.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
                    <p className="mb-4">
                        LaserProGuide serves as both an educational resource and e-commerce
                        store for HP laser printers. We simplify complex specifications and
                        guide customers through the decision-making process.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Professional buying guides in plain English</li>
                        <li>Detailed product comparisons</li>
                        <li>Technical education on laser printing & toner economics</li>
                        <li>Curated catalog of authentic HP printers</li>
                        <li>Transparent online purchasing</li>
                        <li>Practical recommendations based on real use cases</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">
                        Our Mission & Purpose
                    </h2>
                    <p className="mb-4">
                        Our mission is to simplify the printer purchasing process by
                        combining education with e-commerce. We believe customers make
                        better decisions when they fully understand what they are buying.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Translate technical specs into practical benefits</li>
                        <li>Explain true cost of ownership</li>
                        <li>Provide honest comparisons and recommendations</li>
                        <li>Deliver authentic HP products with full warranties</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
                    <p>
                        We focus on matching customers with printers that genuinely suit
                        their needs rather than pushing expensive models. Our education-first
                        approach builds trust and long-term value.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-6">
                        Why Choose LaserProGuide
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Exclusive focus on HP laser printers</li>
                        <li>Education before selling</li>
                        <li>No hidden fees or surprise charges</li>
                        <li>100% genuine HP products</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-8 text-center">
                        Our Core Values
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg shadow p-6 text-center">
                            <ShieldCheck className="mx-auto mb-4 text-blue-600" size={40} />
                            <h3 className="font-semibold text-lg mb-2">Transparency</h3>
                            <p className="text-sm">
                                Clear pricing and honest product information with no hidden
                                agendas.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow p-6 text-center">
                            <Users className="mx-auto mb-4 text-blue-600" size={40} />
                            <h3 className="font-semibold text-lg mb-2">Customer Focus</h3>
                            <p className="text-sm">
                                Education first, sales second — your success is our priority.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow p-6 text-center">
                            <BadgeCheck className="mx-auto mb-4 text-blue-600" size={40} />
                            <h3 className="font-semibold text-lg mb-2">Quality Assurance</h3>
                            <p className="text-sm">
                                Authentic HP products with full OEM warranties guaranteed.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">
                        Contact Information
                    </h2>
                    <p>
                        Email: support@laserproguide.com <br />
                        Phone: (518) 417-1344 <br />
                        Customer Service Hours: Monday – Friday, 8:00 AM – 8:00 PM EST
                    </p>
                </section>
            </div>
        </div>
    );
}

export default About;
