
import { useState, useMemo } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { toast } from '@/hooks/use-toast';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 999,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    category: "smartphones",
    rating: 4.8,
    reviews: 245
  },
  {
    id: 2,
    name: "MacBook Pro 14\"",
    price: 1999,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
    category: "laptops",
    rating: 4.9,
    reviews: 189
  },
  {
    id: 3,
    name: "iPad Air",
    price: 599,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
    category: "tablets",
    rating: 4.7,
    reviews: 156
  },
  {
    id: 4,
    name: "AirPods Pro",
    price: 249,
    image: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400&h=300&fit=crop",
    category: "accessories",
    rating: 4.6,
    reviews: 892
  },
  {
    id: 5,
    name: "Samsung Galaxy S24",
    price: 899,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    category: "smartphones",
    rating: 4.5,
    reviews: 324
  },
  {
    id: 6,
    name: "Dell XPS 13",
    price: 1299,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    category: "laptops",
    rating: 4.4,
    reviews: 67
  },
  {
    id: 7,
    name: "Sony WH-1000XM5",
    price: 399,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop",
    category: "accessories",
    rating: 4.8,
    reviews: 423
  },
  {
    id: 8,
    name: "Surface Pro 9",
    price: 1099,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
    category: "tablets",
    rating: 4.3,
    reviews: 198
  }
];

interface ProductGridProps {
  selectedCategory: string;
  selectedPriceRange: string;
}

export function ProductGrid({ selectedCategory, selectedPriceRange }: ProductGridProps) {
  const [cart, setCart] = useState<number[]>([]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
      
      let priceMatch = true;
      if (selectedPriceRange !== 'all') {
        const price = product.price;
        switch (selectedPriceRange) {
          case '0-100':
            priceMatch = price < 100;
            break;
          case '100-500':
            priceMatch = price >= 100 && price <= 500;
            break;
          case '500-1000':
            priceMatch = price > 500 && price <= 1000;
            break;
          case '1000+':
            priceMatch = price > 1000;
            break;
        }
      }
      
      return categoryMatch && priceMatch;
    });
  }, [selectedCategory, selectedPriceRange]);

  const handleAddToCart = (productId: number, productName: string) => {
    setCart(prev => [...prev, productId]);
    toast({
      title: "Added to Cart",
      description: `${productName} has been added to your cart.`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-slate-800">
          {filteredProducts.length} Products Found
        </h2>
        {cart.length > 0 && (
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
            {cart.length} items in cart
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-500 text-lg">No products found matching your filters.</p>
        </div>
      )}
    </div>
  );
}
