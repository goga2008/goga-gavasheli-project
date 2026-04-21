// import React from 'react';
// import Badge, { BadgeProps } from './Badge';


// export interface Product {
//   id: string | number;
//   name: string;
//   price: number;
//   category: string;
//   image: string;
//   isNew?: boolean;     
//   discount?: number;   
// }


// export interface ProductCardProps {
//   product: Product;
// }


// const categoryVariants: Record<string, BadgeProps['variant']> = {
//   "ტექნიკა": "info",
//   "ტანსაცმელი": "warning",
//   "სპორტული": "success",
//   "ექსკლუზივი": "danger",
// };

// const getBadgeVariant = (categoryName: string): BadgeProps['variant'] => {
//   return categoryVariants[categoryName] || "default"; 
// };

// const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
//   return (
//     <div className="border p-4 rounded-lg  hover:shadow-md transition relative">
      
       
//       <div className="absolute top-6 left-6 flex flex-col gap-1 z-10">
//         {product.isNew && <Badge variant="info">ახალი</Badge>} 
//         {product.discount && <Badge variant="danger">-{product.discount}%</Badge>}
//       </div>

//       <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-48 relative">
//         <img 
//           src={product.image} 
//           alt={product.name} 
//           className="h-full w-full object-cover object-center lg:h-full lg:w-full" 
//         />
//       </div>
      
//       <div className="mt-4 flex justify-between items-start gap-4">
//         <div>
//           <h3 className="font-bold text-gray-900 line-clamp-2">
//             {product.name}
//           </h3>
          
//           <Badge variant={getBadgeVariant(product.category)} className="mt-2">
//             {product.category}
//           </Badge>
//         </div>
        
//         <p className="text-sm font-bold text-gray-900 whitespace-nowrap">
//           {product.price} ₾
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;