import { useParams, Link } from 'react-router-dom';
import { allHomeItems } from '../data/HomeDetails';
import { useEffect } from 'react';

export default function ItemDetails() {
  const { id } = useParams<{ id: string }>();
  const item = allHomeItems.find(i => i.id === id);

  useEffect(() => {
    if (item) {
      document.title = `${item.title} | დეტალები`;
    }
  }, [item]);

  if (!item) {
    return (
      <div className="container mx-auto py-32 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">ინფორმაცია ვერ მოიძებნა</h2>
        <p className="text-gray-500 mb-8">მსგავსი გვერდი არ არსებობს ან წაშლილია.</p>
        <Link to="/" className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
          მთავარ გვერდზე დაბრუნება
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl min-h-[70vh]">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
        <div className="md:w-2/5 shrink-0">
            <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-156 md:h-[700px] object-cover"
            />
        </div>
        <div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-center">
          <div className="inline-block bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide mb-6 w-max">
            დეტალური ინფორმაცია
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">{item.title}</h1>
          <p className="text-xl text-gray-500 font-medium mb-8 leading-relaxed">{item.description}</p>
          
          <div className="text-gray-700 text-lg leading-relaxed bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-inner">
            {item.details.split('\n').map((paragraph, idx) => (
              <p key={idx} className="mb-3 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10">
            <Link to="/" className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-800 transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              მთავარ გვერდზე დაბრუნება
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
