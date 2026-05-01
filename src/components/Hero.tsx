import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100/80 text-indigo-700 text-sm font-bold mb-6 border border-indigo-200">
              <span className="flex h-2.5 w-2.5 rounded-full bg-indigo-600 animate-pulse"></span>
              ახალი კოლექცია 2024
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
              თანამედროვე პროდუქტები <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">საუკეთესო ფასად</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
              იხილეთ ჩვენი ვებსაიტი და დაათვალიერეთ ტექნოლოგიების მრავალფეროვანი არჩევანი.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products" 
                className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 transition-all active:scale-95"
              >
                შეიძინე ახლავე
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none mt-8 lg:mt-0">
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-indigo-300 to-purple-300 rounded-full blur-[80px] opacity-40 -z-10"></div>
            
            <img 
              src="/photo-M.webp" 
              alt="თანამედროვე ტექნიკა" 
              className="w-full rounded-3xl shadow-2xl border-4 border-white/80 object-cover lg:-rotate-2 hover:rotate-0 transition-transform duration-500"
            />
            
            
            <div className="absolute -bottom-6 -left-6 lg:bottom-10 lg:-left-10 bg-white p-4 rounded-2xl  border border-gray-100 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Hero;