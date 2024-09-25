
import React, { useState } from 'react';

const planes = [
  { id: 'basico', nombre: 'Plan Básico', milanesas: 4, precio: 2000 },
  { id: 'estandar', nombre: 'Plan Estándar', milanesas: 8, precio: 3500 },
  { id: 'premium', nombre: 'Plan Premium', milanesas: 12, precio: 5000 },
];

const Subscription = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    celular: '',
    email: '',
    plan: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    // Aquí puedes agregar la lógica para enviar los datos
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Planes de Suscripción</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {planes.map((plan) => (
          <div key={plan.id} className="border rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold mb-4">{plan.nombre}</h2>
            <p className="mb-4">{plan.milanesas} milanesas por semana</p>
            <p className="text-2xl font-bold mb-4">${plan.precio}/mes</p>
            <button 
              className="bg-[#A98143] text-white px-4 py-2 rounded-md"
              onClick={() => setFormData(prev => ({ ...prev, plan: plan.id }))}
            >
              Elegir Plan
            </button>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Información de Contacto</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="plan" className="block mb-2">Plan Seleccionado</label>
          <select
            id="plan"
            name="plan"
            value={formData.plan}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          >
            <option value="">Selecciona un plan</option>
            {planes.map((plan) => (
              <option key={plan.id} value={plan.id}>{plan.nombre}</option>
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

export default Subscription;
