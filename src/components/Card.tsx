import React from 'react';
import {Link} from 'react-router-dom'

interface CardProps {
  id: string;
  title: string;
  image: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ id, title, image, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden bg-white border border-gray-200  transition-all duration-300">
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

      <div className="px-6 pt-4 pb-4">
        <Link 
          to={`/details/${id}`} 
          className="bg-[#1e3a5f] text-white font-bold py-3 px-4 rounded w-full hover:bg-[#2c5282] hover:shadow-lg active:scale-95 transition-all duration-300 block text-center"
        >
          ონლაინ დეტალები
        </Link>
      </div>
    </div>
  );
};

export default Card;

