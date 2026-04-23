import { useState, useEffect } from 'react';

// FakeStore API-დან წამოსული მონაცემების ტიპი
interface FakeStoreProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function OnlineShop() {
  const [items, setItems] = useState<FakeStoreProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error('სერვერთან დაკავშირების პრობლემა');
        }
        return res.json();
      })
      .then((data) => {
        setItems(data);
        setLoading(false); 
      })
      .catch((err) => {
        console.error(err);
        
        setError('შეცდომის შეტყობინება: მონაცემები ვერ ჩაიტვირთა, სცადეთ მოგვიანებით.');
        setLoading(false); 
      });
  }, []);

 
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
          <h2 className="text-xl font-bold text-gray-600">იტვირთება...</h2>
        </div>
      </div>
    );
  }

  
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="bg-red-50 text-red-600 px-6 py-4 rounded-xl border border-red-200 shadow-sm flex items-center gap-3">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-lg font-semibold">{error}</h2>
        </div>
      </div>
    );
  }

  // წარმატებით ჩატვირთული მონაცემების გამოჩენა
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-10 text-center">
        პროდუქტები (FakeStore API)
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {items.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-2xl  border border-gray-100 overflow-hidden hover:shadow-xl flex flex-col group"
          >
            <div className="h-56 p-6 bg-white flex items-center justify-center relative overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute top-3 right-3 bg-yellow-50 text-indigo-600 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                {item.category}
              </div>
            </div>
            
            <div className="p-5 flex flex-col flex-grow  border-gray-50 bg-gray-50/30">
              <h3 className="font-bold text-gray-800 text-lg mb-2 line-clamp-2 leading-tight" title={item.title}>
                {item.title}
              </h3>
              
              <p className="text-gray-500 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-2xl font-black text-indigo-600">${item.price}</span>
                <div className="flex items-center gap-1.5 bg-yellow-50/80 px-2.5 py-1.5 rounded-lg border border-yellow-100">
                  <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-bold text-yellow-700">{item.rating.rate}</span>
                  <span className="text-xs font-medium text-yellow-600/70 ml-1">({item.rating.count})</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}