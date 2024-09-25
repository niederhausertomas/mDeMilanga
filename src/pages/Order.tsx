import { useState } from 'react'
import milanesaClasica from "../assets/images/milanesa-clasica.jpg"
import milanesaNapolitana from "../assets/images/milanesa-napolitana.jpg"
import milanesaCaballo from "../assets/images/milanesa-caballo.jpg"
import milanesaPollo from "../assets/images/milanesa-pollo.jpg"
import milanesaVegana from "../assets/images/milanesa-vegana.jpg"


interface Product {
  id: number;
  name: string;
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Milanesa Clásica", image: `${milanesaClasica}` },
  { id: 2, name: "Milanesa Napolitana", image: `${milanesaNapolitana}` },
  { id: 3, name: "Milanesa a Caballo", image: `${milanesaCaballo}` },
  { id: 4, name: "Milanesa de Pollo", image: `${milanesaPollo}` },
  { id: 5, name: "Milanesa Vegana", image: `${milanesaVegana}` },
];

const Order = () => {
  const [counts, setCounts] = useState<{ [key: number]: number }>({});

  const updateCount = (id: number, increment: number) => {
    setCounts(prev => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) + increment, 0)
    }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Nuestros Productos</h1>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="flex items-center border-b pb-4">
            <img src={product.image} alt={product.name} className="w-24 h-24 object-cover mr-4" />
            <div className="flex-grow">
              <h2 className="text-xl font-semibold">{product.name}</h2>
            </div>
            <div className="flex items-center">
              <button onClick={() => updateCount(product.id, -1)} className="bg-red-500 text-white px-2 py-1 rounded">-</button>
              <span className="mx-2">{counts[product.id] || 0}</span>
              <button onClick={() => updateCount(product.id, 1)} className="bg-green-500 text-white px-2 py-1 rounded">+</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Order;
