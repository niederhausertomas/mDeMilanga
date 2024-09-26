import { useState, useMemo } from 'react'
import milanesaClasica from "../assets/images/milanesa-clasica.jpg"
import milanesaNapolitana from "../assets/images/milanesa-napolitana.jpg"
import milanesaCaballo from "../assets/images/milanesa-caballo.jpg"
import milanesaPollo from "../assets/images/milanesa-pollo.jpg"
import milanesaVegana from "../assets/images/milanesa-vegana.jpg"

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number; 
}

const products: Product[] = [
  { 
    id: 1, 
    name: "Milanesa Clásica", 
    image: `${milanesaClasica}`,
    description: "Nuestra milanesa tradicional, tierna y jugosa.",
    price: 10.99
  },
  { 
    id: 2, 
    name: "Milanesa Napolitana", 
    image: `${milanesaNapolitana}`,
    description: "Cubierta con salsa de tomate, jamón y queso gratinado.",
    price: 12.99
  },
  { 
    id: 3, 
    name: "Milanesa a Caballo", 
    image: `${milanesaCaballo}`,
    description: "Topped con dos huevos fritos, una combinación irresistible.",
    price: 13.99
  },
  { 
    id: 4, 
    name: "Milanesa de Pollo", 
    image: `${milanesaPollo}`,
    description: "Versión ligera hecha con pechuga de pollo empanizada.",
    price: 11.99
  },
  { 
    id: 5, 
    name: "Milanesa Vegana", 
    image: `${milanesaVegana}`,
    description: "Opción plant-based, igual de crujiente y sabrosa.",
    price: 12.99
  },
];

const Order = () => {
  const [counts, setCounts] = useState<{ [key: number]: number }>({});
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const updateCount = (id: number, increment: number) => {
    setCounts(prev => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) + increment, 0)
    }));
  };

  const orderDetails = useMemo(() => {
    return products.filter(product => counts[product.id] > 0).map(product => ({
      ...product,
      quantity: counts[product.id],
      subtotal: counts[product.id] * product.price
    }));
  }, [counts]);

  const total = useMemo(() => {
    return orderDetails.reduce((sum, item) => sum + item.subtotal, 0);
  }, [orderDetails]);

  const handlePayment = () => {
    setIsProcessingPayment(true);
    // Aquí simularemos un proceso de pago con un temporizador
    setTimeout(() => {
      setIsProcessingPayment(false);
      // Aquí podrías agregar lógica adicional después de procesar el pago
    }, 2000); // Simula un proceso de 2 segundos
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Nuestros Productos</h1>
      <ul className="space-y-4 mb-8">
        {products.map((product) => (
          <li key={product.id} className="flex items-center border-b pb-4">
            <img src={product.image} alt={product.name} className="w-24 h-24 object-cover mr-4" />
            <div className="flex-grow">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <span className="text-lg font-medium">€{product.price.toFixed(2)}</span>
              </div>
              <p className="text-gray-600 mt-1">{product.description}</p>
            </div>
            <div className="flex items-center ml-4">
              <button onClick={() => updateCount(product.id, -1)} className="bg-[#A98143] text-white px-2 py-1 rounded">-</button>
              <span className="mx-2">{counts[product.id] || 0}</span>
              <button onClick={() => updateCount(product.id, 1)} className="bg-[#A98143] text-white px-2 py-1 rounded">+</button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 border-t pt-4">
        <h2 className="text-xl font-bold mb-4">Detalle de la Compra</h2>
        {orderDetails.length > 0 ? (
          <>
            <ul className="space-y-2 mb-4">
              {orderDetails.map(item => (
                <li key={item.id} className="flex justify-between">
                  <span>{item.quantity}x {item.name}</span>
                  <span>€{item.subtotal.toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between font-bold text-lg mb-4">
              <span>Total a Pagar:</span>
              <span>€{total.toFixed(2)}</span>
            </div>
          </>
        ) : (
          <p className="text-gray-600 mb-4">Tu carrito está vacío. Añade algunos productos para comenzar.</p>
        )}
        
        <button 
          onClick={handlePayment}
          disabled={orderDetails.length === 0 || isProcessingPayment}
          className={`w-full py-2 px-4 rounded font-bold text-white ${
            orderDetails.length > 0 && !isProcessingPayment
              ? 'bg-[#A98143]'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          {isProcessingPayment ? 'Procesando pago...' : 'Pagar'}
        </button>
      </div>
    </div>
  );
};

export default Order;
