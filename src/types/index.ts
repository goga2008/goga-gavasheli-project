export interface Project{id: number , title:string , description:string , imageUrl:string,techStack: string,liveUrl: string}
export interface NavLink{label:string,path:string}
export interface ContactForm{name:string , email:string,message:string}

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  brand: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  isNew?: boolean;
  discount?: number;
  description: string;
}