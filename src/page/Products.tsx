import { useState, useMemo, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { products, categories, brands, priceRanges, sortOptions } from '../data/Products';

function Products() {
  useEffect(() => {
    document.title = 'Products| ჩემი საიტი';
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('ყველა');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);
  const [sortBy, setSortBy] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [filter, setFilter] = useState<string>('all');

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== 'ყველა') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Brand filter
    if (selectedBrands.length > 0) {
      result = result.filter((p) => selectedBrands.includes(p.brand));
    }

    // Price filter
    const range = priceRanges[selectedPriceRange];
    result = result.filter((p) => p.price >= range.min && p.price <= range.max);

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    
    switch (sortBy) {
      case 'ფასის ზრდა':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'ფასის კლებადობა':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'შეფასება':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'სულ ახალი':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        result.sort((a, b) => b.reviewCount - a.reviewCount);
    }

    return result;
  }, [selectedCategory, selectedBrands, selectedPriceRange, sortBy, searchQuery]);

  const clearAllFilters = () => {
    setSelectedCategory('ყველა');
    setSelectedBrands([]);
    setSelectedPriceRange(0);
    setSearchQuery('');
    setSortBy('ყველაზე რეინტიგული ');
  };

  const hasActiveFilters =
    selectedCategory !== 'ყველა' ||
    selectedBrands.length > 0 ||
    selectedPriceRange !== 0 ||
    searchQuery.trim() !== '';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
     
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-600 to-blue-500">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 md:py-16 relative">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">
            პროდუქცია
          </h1>
          <p className="text-indigo-100 text-lg max-w-2xl">
            აღმოაჩინეთ უახლესი ტექნოლოგიური პროდუქტები საუკეთესო ფასებით
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-xl relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="მოძებნე პროდუქტი..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all duration-300 text-lg"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8">
        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setShowMobileFilter(!showMobileFilter)}
          className="lg:hidden w-full mb-6 flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-xl py-3 px-4 text-gray-700 font-semibold shadow-sm hover:shadow-md transition-all"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
             d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          ფილტრები
          {hasActiveFilters && (
            <span>
              !
            </span>
          )}
        </button>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className={`${showMobileFilter ? 'block' : 'hidden'} lg:block w-full lg:w-72 flex-shrink-0`}>
            <div className="bg-white rounded-2xl  border-gray-100 p-6 sticky top-6 space-y-7">
              {/* Filter Header */}
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                  <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  ფილტრები
                </h2>
                {hasActiveFilters && (
                  <button
                    onClick={clearAllFilters}
                    className="text-sm text-rose-500 hover:text-rose-600 font-medium transition-colors"
                  >
                    გასუფთავება
                  </button>
                )}
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  კატეგორიები
                </h3>
                <div className="space-y-1.5">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                        selectedCategory === cat
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white '
                          : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600  '
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  ფასის დიაპაზონი
                </h3>
                <div className="space-y-1.5">
                  {priceRanges.map((range, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedPriceRange(index)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                        selectedPriceRange === index
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white  '
                          : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div>
                <h3 >
                  ბრენდები
                </h3>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <label
                      key={brand}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => toggleBrand(brand)}
                          className="sr-only"
                        />
                        <div
                          className={`w-5 h-5 rounded-md border-2 transition-all duration-300 flex items-center justify-center ${
                            selectedBrands.includes(brand)
                              ? 'bg-indigo-500 border-indigo-500'
                              : 'border-gray-300 group-hover:border-indigo-400'
                          }`}
                        >
                          {selectedBrands.includes(brand) && (
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className={`text-sm font-medium transition-colors ${
                        selectedBrands.includes(brand) ? 'text-indigo-600' : 'text-gray-600 group-hover:text-gray-600'
                      }`}>
                        {brand}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row items-start items-center justify-between gap-4 mb-6">
              <p className="text-gray-500 font-medium">
                ნაპოვნია <span className="text-indigo-600 font-bold">{filteredProducts.length}</span> პროდუქტი
              </p>
              <div className="flex items-center gap-3">
                <label className="text-sm text-gray-500 font-medium">დალაგება:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm hover:shadow-md transition-all cursor-pointer appearance-none pr-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.5rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em',
                  }}
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Active Filters Tags */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCategory !== 'ყველა' && (
                  <span className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full text-sm font-medium">
                    {selectedCategory}
                    <button onClick={() => setSelectedCategory('ყველა')} className="hover:text-indigo-900">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </span>
                )}
                {selectedBrands.map((brand) => (
                  <span key={brand} className="inline-flex items-center gap-1.5 bg-purple-50 text-purple-700 px-3 py-1.5 rounded-full text-sm font-medium">
                    {brand}
                    <button onClick={() => toggleBrand(brand)} className="hover:text-purple-900">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </span>
                ))}
                {selectedPriceRange !== 0 && (
                  <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full text-sm font-medium">
                    {priceRanges[selectedPriceRange].label}
                    <button onClick={() => setSelectedPriceRange(0)} className="hover:text-emerald-900">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-12 h-12 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">პროდუქტი ვერ მოიძებნა</h3>
                <p className="text-gray-400 mb-6 max-w-md">
                  სცადეთ სხვა ფილტრების გამოყენება ან გაასუფთავეთ არსებული ფილტრები
                </p>
                <button
                  onClick={clearAllFilters}
                  className="bg-gradient-to-blue-500 text-white px-6 py-3 rounded-xl font-semibold  transition-all duration-300"
                >
                  ფილტრების გასუფთავება
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
