import { useState } from 'react'
import { useParams } from 'react-router-dom'

const planes = [
  { id: 'basico', nombre: 'Plan Básico', milanesas: 4, precio: 24 },
  { id: 'estandar', nombre: 'Plan Estándar', milanesas: 8, precio: 40 },
  { id: 'premium', nombre: 'Plan Premium', milanesas: 12, precio: 70 },
]

const SubscriptionForm = () => {
  const { planId } = useParams<{ planId: string }>()
  const [formData, setFormData] = useState({
    plan: planId || '',
    nombre: '',
    direccion: '',
    celular: '',
    email: '',
  })

  const planSeleccionado = planes.find(plan => plan.id === formData.plan)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Datos del formulario:', formData)
    // Aquí puedes agregar la lógica para enviar los datos
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Formulario de Suscripción</h1>
      
      {planSeleccionado && (
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Plan Seleccionado: {planSeleccionado.nombre}</h2>
          <p className="mb-2">{planSeleccionado.milanesas} milanesas por mes</p>
          <p className="text-xl font-bold">€{planSeleccionado.precio}/mes</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="plan" className="block mb-2">Plan</label>
          <select
            id="plan"
            name="plan"
            value={formData.plan}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          >
            <option value="">Selecciona un plan</option>
            {planes.map(plan => (
              <option key={plan.id} value={plan.id} className="w-full">
                {plan.nombre}
              </option>
            ))}
          </select>
        </div>
        
        <div className="mb-4">
          <label htmlFor="nombre" className="block mb-2">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="direccion" className="block mb-2">Dirección</label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={formData.direccion}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="celular" className="block mb-2">Celular</label>
          <input
            type="tel"
            id="celular"
            name="celular"
            value={formData.celular}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <button type="submit" className="bg-[#A98143] text-white px-4 py-2 rounded-md w-full">
          Suscribirse
        </button>
      </form>
    </div>
  );
};

export default SubscriptionForm;
