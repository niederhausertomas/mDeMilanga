import { useNavigate } from 'react-router-dom'
import milanesaClasica from "../assets/images/milanesa-clasica.jpg"
import milanesaNapolitana from "../assets/images/milanesa-napolitana.jpg"
import milanesaPollo from "../assets/images/milanesa-pollo.jpg"

const planes = [
  { id: 'basico', nombre: 'Plan Básico', milanesas: 4, precio: 24, img: milanesaClasica },
  { id: 'estandar', nombre: 'Plan Estándar', milanesas: 8, precio: 40, img: milanesaNapolitana },
  { id: 'premium', nombre: 'Plan Premium', milanesas: 12, precio: 70, img: milanesaPollo },
]

const Subscription = () => {
  const navigate = useNavigate()

  const handleElegirPlan = (planId: string) => {
    navigate(`/subscription-form/${planId}`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Planes de Suscripción</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {planes.map((plan) => (
          <div key={plan.id} className="border rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold mb-4">{plan.nombre}</h2>
            <img src={plan.img} alt={plan.nombre} className="w-full h-40 object-cover mb-4" />
            <p className="mb-4">{plan.milanesas} milanesas por mes</p>
            <p className="text-2xl font-bold mb-4">€{plan.precio}/mes</p>
            <button 
              className="bg-[#A98143] text-white px-4 py-2 rounded-md"
              onClick={() => handleElegirPlan(plan.id)}
            >
              Elegir Plan
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Subscription;
