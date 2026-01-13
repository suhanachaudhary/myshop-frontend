
function ShippingPolicy() {
    return (
        <div className="bg-gray-50 py-16 px-4">
            <div className="max-w-5xl mx-auto">

                <h1 className="text-4xl font-bold text-center mb-2">
                    Shipping Policy
                </h1>
                <p className="text-center text-gray-600 mb-1">
                    Fast, reliable, and cost-effective shipping for all LaserProGuide customers.
                </p>
                <p className="text-center text-sm text-gray-500 mb-10">
                    Last updated: November 20, 2025
                </p>

                <div className="bg-white rounded-lg shadow p-8 space-y-10 text-sm text-gray-700 leading-relaxed">

                    <section>
                        <h2 className="text-lg font-semibold mb-3">1. Processing Times</h2>

                        <div className="space-y-4">
                            <div>
                                <h3 className="font-medium mb-1">Standard Processing</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>In-Stock Items: 1–2 business days</li>
                                    <li>Ink Cartridges: Same business day (before 2 PM CST)</li>
                                    <li>Printer Equipment: 2–3 business days</li>
                                    <li>Special Orders: 5–7 business days</li>
                                    <li>Custom Configurations: 3–5 business days</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-medium mb-1">Order Cutoff Times</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Standard Items: 2:00 PM CST (Mon–Fri)</li>
                                    <li>Express Orders: 12:00 PM CST</li>
                                    <li>Weekend Orders: Processed next business day</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold mb-3">
                            2. Shipping Methods & Costs (United States)
                        </h2>

                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-left">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="border px-4 py-2">Shipping Method</th>
                                        <th className="border px-4 py-2">Delivery Time</th>
                                        <th className="border px-4 py-2">Cost</th>
                                        <th className="border px-4 py-2">Free Shipping</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border px-4 py-2">Standard Ground</td>
                                        <td className="border px-4 py-2">5–7 business days</td>
                                        <td className="border px-4 py-2">$7.99</td>
                                        <td className="border px-4 py-2">Orders $299+</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">Expedited</td>
                                        <td className="border px-4 py-2">3–4 business days</td>
                                        <td className="border px-4 py-2">$14.99</td>
                                        <td className="border px-4 py-2">Orders $399+</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">Express</td>
                                        <td className="border px-4 py-2">2–3 business days</td>
                                        <td className="border px-4 py-2">$24.99</td>
                                        <td className="border px-4 py-2">Orders $499+</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">Next Business Day</td>
                                        <td className="border px-4 py-2">1 business day</td>
                                        <td className="border px-4 py-2">$39.99</td>
                                        <td className="border px-4 py-2">Orders $599+</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold mb-3">
                            Large Item Shipping
                        </h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Standard Freight (40+ lbs): $49.99</li>
                            <li>Liftgate Service: Additional $35</li>
                            <li>Inside Delivery: Additional $75</li>
                            <li>White Glove Service: Additional $149</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold mb-3">
                            3. Geographic Coverage
                        </h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>All 50 US states & Washington D.C.</li>
                            <li>Alaska & Hawaii (additional charges apply)</li>
                            <li>Puerto Rico & US Virgin Islands</li>
                            <li>Military APO/FPO addresses</li>
                        </ul>
                        <p className="mt-2 font-medium">
                            International shipping is not available at this time.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold mb-3">
                            4. Order Tracking & Delivery
                        </h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Email tracking confirmation</li>
                            <li>Real-time tracking updates (optional)</li>
                            <li>Estimated delivery date & time window</li>
                            <li>Delivery confirmation notification</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold mb-3">
                            5. Shipping Restrictions
                        </h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>No hazardous materials or restricted items</li>
                            <li>No PO Boxes for large items</li>
                            <li>Oversized items may have delivery limitations</li>
                            <li>Additional charges for remote locations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold mb-3">
                            6. Delivery Issues & Claims
                        </h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Report lost or damaged packages within 48 hours</li>
                            <li>Carrier investigation initiated immediately</li>
                            <li>Free replacement or full refund available</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold mb-3">
                            7. Customer Responsibilities
                        </h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Provide accurate shipping details</li>
                            <li>Be available during delivery window</li>
                            <li>Inspect packages before signing</li>
                            <li>Retain packaging for returns</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold mb-3">
                            8. Contact Information
                        </h2>
                        <p>
                            <strong>LaserProGuide</strong><br />
                            10601 Clarence Dr Ste 250, Frisco, Texas 75033-3867, USA<br />
                            Email: support@laserproguide.com<br />
                            Phone: (518) 417-1344<br />
                            Business Hours: Monday–Friday, 8:00 AM – 8:00 PM CST
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}

export default ShippingPolicy;
