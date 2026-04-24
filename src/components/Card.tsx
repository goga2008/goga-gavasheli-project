import React from 'react';

interface CardProps {
  title: string;
  image: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, image, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden bg-white border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
      <img 
        className="w-full h-48 object-cover" 
        src={image} 
        alt={title} 
      />
      
      
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">
          {title}
        </div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>

      <div className="px-6 pt-4 pb-2">
        <button className="bg-primary text-white font-bold py-2 px-4 rounded w-full hover:brightness-110 active:scale-95 transition-all duration-300">
           ონლაინ დეტალები
        </button>
      </div>
    </div>
  );
};

export default Card;

