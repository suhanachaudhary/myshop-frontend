import { useState, useEffect } from "react";
import { getAdminProducts } from "../api/adminProductApi";
import { ProductCard, Container, EmptyState, SearchBar } from "../components/ui";

const Shopping = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getAdminProducts();
      setProducts(res.data.products);
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white pt-10 pb-10">
      <Container>
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-[#0F172A] text-3xl shadow-lg hover:scale-110 transition-transform duration-300">
            🖨️
          </div>
        </div>

        <h1 className="text-center text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
          Printer Shop
        </h1>

        <p className="text-center text-[#475569] text-lg max-w-2xl mx-auto mb-12">
          Discover the perfect HP LaserJet printer for your needs with our
          curated selection of professional-grade printers
        </p>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-4 md:p-5">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
            <SearchBar
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search printers by name, model, or features"
              className="w-full lg:w-[380px]"
            />

            <div className="flex flex-wrap gap-3 w-full">
              <div className="flex items-center gap-2 border-2 border-gray-200 rounded-xl px-4 py-3 hover:border-blue-400 transition-all duration-300 bg-white">
                <select className="text-sm bg-transparent outline-none text-[#0F172A] cursor-pointer">
                  <option className="text-start">All Types</option>
                </select>
              </div>

              <select className="border-2 border-gray-200 rounded-xl px-8 py-3 text-sm text-[#0F172A] outline-none hover:border-blue-400 transition-all duration-300 cursor-pointer bg-white">
                <option>All Prices</option>
              </select>

              <select className="border-2 border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0F172A] outline-none hover:border-blue-400 transition-all duration-300 cursor-pointer bg-white">
                <option>All Ratings</option>
              </select>

              <select className="border-2 border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0F172A] outline-none hover:border-blue-400 transition-all duration-300 cursor-pointer bg-white">
                <option>Most Popular</option>
              </select>
            </div>

            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg">
                ▦
              </button>
              <button className="w-10 h-10 rounded-xl border-2 border-gray-200 text-[#64748B] flex items-center justify-center hover:bg-gray-100 hover:border-gray-300 transition-all duration-300">
                ☰
              </button>
            </div>
          </div>
        </div>
      </Container>

      <section className="py-20">
        <Container>
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A]">
                Featured Printers
              </h2>
              <p className="text-[#475569] mt-1 text-lg">
                Our professionally-recommended picks for the best printing
                experience
              </p>
            </div>

            <div className="hidden md:flex items-center gap-2 text-sm bg-gradient-to-r from-amber-50 to-yellow-50 px-4 py-2 rounded-full border border-amber-200">
              <span className="text-amber-500">⭐</span>
              <span className="font-semibold text-amber-700">
                Editor's Choice
              </span>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <ProductCard
                  key={product._id}
                  product={product}
                  index={index}
                  showAnimation={true}
                />
              ))
            ) : (
              <div className="col-span-full">
                <EmptyState
                  icon="🔍"
                  title="No products found"
                  description={`No products match "${search}". Try different keywords.`}
                />
              </div>
            )}
          </div>
        </Container>
      </section>

      <Container className="mt-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A]">
              All Printers
            </h2>
            <p className="text-[#475569] text-lg">
              Complete collection of HP LaserJet printers for every need
            </p>
          </div>
          <p className="text-sm font-medium text-[#64748B] bg-gray-100 px-4 py-2 rounded-full">
            Showing {products.length} products
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Shopping;
