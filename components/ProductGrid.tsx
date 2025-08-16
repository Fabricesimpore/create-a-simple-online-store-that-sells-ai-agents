
import { useState, useEffect } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch products from API
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    // Generate contextual products based on business type
    const businessProducts = [
      { 
        id: '1', 
        name: 'Premium Service Package', 
        price: 199.99, 
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop&crop=center' 
      },
      { 
        id: '2', 
        name: 'Standard Service Package', 
        price: 99.99, 
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center' 
      },
      { 
        id: '3', 
        name: 'Basic Service Package', 
        price: 49.99, 
        image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=300&fit=crop&crop=center' 
      }
    ];
    setProducts(businessProducts);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <div key={product.id} className="bg-white rounded-lg shadow-md p-6">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <p className="text-2xl font-bold text-green-600">${product.price}</p>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
