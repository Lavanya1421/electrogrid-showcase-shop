
import { ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (id: number, name: string) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-1">
      <div className="aspect-square overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-slate-800 text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-slate-700">{product.rating}</span>
          </div>
          <span className="text-sm text-slate-500">({product.reviews} reviews)</span>
        </div>
        
        <div className="text-2xl font-bold text-slate-800 mb-4">
          ${product.price.toLocaleString()}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2.5 transition-all duration-200 hover:shadow-lg group"
          onClick={() => onAddToCart(product.id, product.name)}
        >
          <ShoppingCart className="w-4 h-4 mr-2 group-hover:animate-bounce" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
