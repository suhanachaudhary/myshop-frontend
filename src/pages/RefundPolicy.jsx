
function RefundPolicy() {
    return (
        <div className="bg-gray-50 py-16 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <h1 className="text-4xl font-bold text-center mb-2">
                    Refund & Return Policy
                </h1>
                <p className="text-center text-gray-600 mb-1">
                    Your satisfaction is our priority at LaserProGuide. We offer a comprehensive 30-day return and refund policy.
                </p>
                <p className="text-center text-sm text-gray-500 mb-10">
                    Last updated: November 20, 2025
                </p>

                {/* Highlight Boxes */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-lg shadow text-center">
                        <h3 className="text-lg font-semibold mb-2">30-Day Returns</h3>
                        <p className="text-gray-600 text-sm">
                            Return eligible items within 30 days of delivery
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow text-center">
                        <h3 className="text-lg font-semibold mb-2">Original Condition</h3>
                        <p className="text-gray-600 text-sm">
                            Items must be unused and in original packaging
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow text-center">
                        <h3 className="text-lg font-semibold mb-2">Full Refund</h3>
                        <p className="text-gray-600 text-sm">
                            Refund issued to original payment method
                        </p>
                    </div>
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-lg shadow p-8 space-y-8 text-sm text-gray-700 leading-relaxed">

                    {/* Return Eligibility */}
                    <section>
                        <h2 className="text-lg font-semibold mb-3">
                            1. Return Eligibility
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-medium mb-2">Returnable Items</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Unopened HP printers in original packaging</li>
                                    <li>Unused ink cartridges with seals intact</li>
                                    <li>Office supplies in original condition</li>
                                    <li>Defective items (any condition)</li>
                                    <li>Items received in error</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-medium mb-2">Non-Returnable Items</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Opened or used ink cartridges</li>
                                    <li>Items damaged by customer</li>
                                    <li>Items without original packaging</li>
                                    <li>Special order or customized items</li>
                                    <li>Items returned after 30 days</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* How to Return */}
                    <section>
                        <h2 className="text-lg font-semibold mb-3">
                            2. How to Return Items
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <h3 className="font-medium">Step 1: Initiate Return Request</h3>
                                <p>
                                    Contact support@laserproguide.com or call (518) 417-1344 with order number,
                                    product details, reason for return, and preferred resolution.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium">Step 2: Return Authorization</h3>
                                <p>
                                    We’ll issue an RMA number within 24 hours and provide prepaid shipping labels
                                    for eligible returns.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium">Step 3: Secure Packaging</h3>
                                <p>
                                    Include RMA number, original packaging, manuals, accessories, and tracking confirmation.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium">Step 4: Processing & Refund</h3>
                                <p>
                                    Inspection within 2 business days. Refunds processed within 3–5 business days.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Refund Table */}
                    <section>
                        <h2 className="text-lg font-semibold mb-3">
                            3. Refund Types and Timeframes
                        </h2>

                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-left text-sm">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="border px-4 py-2">Payment Method</th>
                                        <th className="border px-4 py-2">Refund Time</th>
                                        <th className="border px-4 py-2">Notes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border px-4 py-2">Credit Card</td>
                                        <td className="border px-4 py-2">3–5 business days</td>
                                        <td className="border px-4 py-2">May take 1–2 billing cycles</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">Debit Card</td>
                                        <td className="border px-4 py-2">3–5 business days</td>
                                        <td className="border px-4 py-2">Direct to bank account</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">PayPal</td>
                                        <td className="border px-4 py-2">1–3 business days</td>
                                        <td className="border px-4 py-2">Fastest refund option</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Shipping */}
                    <section>
                        <h2 className="text-lg font-semibold mb-3">
                            4. Return Shipping
                        </h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Free return shipping for defective or wrong items</li>
                            <li>Customer pays shipping for change-of-mind returns</li>
                            <li>Typical cost: $8.99 (small items), $15.99 (printers)</li>
                        </ul>
                    </section>

                    {/* Exchanges */}
                    <section>
                        <h2 className="text-lg font-semibold mb-3">
                            5. Exchanges
                        </h2>
                        <p>
                            We do not offer direct exchanges. Please return the item and place a new order.
                        </p>
                    </section>

                    {/* Damaged */}
                    <section>
                        <h2 className="text-lg font-semibold mb-3">
                            6. Damaged or Defective Items
                        </h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Report within 48 hours of delivery</li>
                            <li>Provide photos of damage</li>
                            <li>Free replacement or full refund</li>
                        </ul>
                    </section>

                    {/* Cancellation */}
                    <section>
                        <h2 className="text-lg font-semibold mb-3">
                            7. Cancellations
                        </h2>
                        <p>
                            Orders can be canceled before shipment. Once shipped, standard return policy applies.
                        </p>
                    </section>

                    {/* International */}
                    <section>
                        <h2 className="text-lg font-semibold mb-3">
                            8. International Returns
                        </h2>
                        <p>
                            International customers are responsible for return shipping, customs, and duties.
                        </p>
                    </section>

                    {/* Contact */}
                    <section>
                        <h2 className="text-lg font-semibold mb-3">
                            Contact Information
                        </h2>
                        <p>
                            <strong>LaserProGuide</strong><br />
                            10601 Clarence Dr Ste 250, Frisco, Texas 75033-3867, USA<br />
                            Email: support@laserproguide.com<br />
                            Phone: (518) 417-1344
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}

export default RefundPolicy;
