import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { products } from '../data/Products';
import type { Product } from '../types';

interface CartItem extends Product {
  quantity: number;
}

export default function Cart() {
  const location = useLocation();

  useEffect(() => {
    document.title = 'კალათა | ჩემი საიტი';
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // სატესტოდ ვიყენებთ პირველ და მეხუთე პროდუქტს მონაცემთა ბაზიდან
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { ...products[0], quantity: 1 },
    { ...products[4], quantity: 2 },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 15 : 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header gradient area */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 pb-32 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-4">თქვენი კალათა</h1>
          <p className="text-indigo-100 text-lg">გადახედეთ არჩეულ პროდუქტებს და დაასრულეთ შეკვეთა</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24">
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-8 space-y-6">
              <div className="bg-white rounded-3xl shadow-xl shadow-indigo-100/50 p-6 md:p-8 overflow-hidden">
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-100">
                    {cartItems.map((item) => (
                      <li key={item.id} className="flex py-6 group">
                        <div className="h-28 w-28 flex-shrink-0 overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 transition-transform group-hover:scale-105">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-6 flex flex-1 flex-col justify-center">
                          <div>
                            <div className="flex justify-between text-lg font-bold text-gray-900 mb-1">
                              <h3>
                                <Link to={`/details/${item.id}`} className="hover:text-indigo-600 transition-colors">
                                  {item.name}
                                </Link>
                              </h3>
                              <p className="ml-4 text-indigo-600">{item.price} ₾</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">{item.category} • {item.brand}</p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm mt-4">
                            <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-1 border border-gray-200">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-gray-600 hover:text-indigo-600 hover:shadow-sm transition-all"
                              >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                              </button>
                              <span className="font-semibold text-gray-700 w-4 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-gray-600 hover:text-indigo-600 hover:shadow-sm transition-all"
                              >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                              </button>
                            </div>

                            <button
                              type="button"
                              onClick={() => removeItem(item.id)}
                              className="font-medium text-rose-500 hover:text-rose-600 flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-rose-50 transition-colors"
                            >
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                              წაშლა
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-3xl shadow-xl shadow-indigo-100/50 p-6 md:p-8 sticky top-24">
                <h2 className="text-xl font-extrabold text-gray-900 mb-6">შეკვეთის დეტალები</h2>
                
                <div className="space-y-4 text-sm text-gray-600 mb-6">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <p>პროდუქტების ჯამი</p>
                    <p className="font-semibold text-gray-900">{subtotal} ₾</p>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <p>მიტანის სერვისი</p>
                    <p className="font-semibold text-gray-900">{shipping} ₾</p>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <p className="text-base font-bold text-gray-900">სულ გადასახდელი</p>
                    <p className="text-2xl font-black text-indigo-600">{total} ₾</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => alert('შეკვეთა წარმატებით გაფორმდა!')}
                  className="w-full flex items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-indigo-200 hover:from-indigo-600 hover:to-purple-700 transition-all transform hover:-translate-y-0.5"
                >
                  ყიდვის გაგრძელება
                </button>
                
                <div className="mt-6 text-center text-sm text-gray-500">
                  <p>
                    ან{' '}
                    <Link to="/products" className="font-semibold text-indigo-600 hover:text-indigo-500 transition-colors">
                      გააგრძელე შოპინგი
                      <span aria-hidden="true"> &rarr;</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-xl shadow-indigo-100/50 p-12 text-center">
            <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">თქვენი კალათა ცარიელია</h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              დაამატეთ სასურველი პროდუქტები კალათაში და გააფორმეთ შეკვეთა მარტივად.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-2xl bg-indigo-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all transform hover:-translate-y-0.5"
            >
              პროდუქტების ნახვა
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
