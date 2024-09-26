import React, { useState } from 'react';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario
        console.log('Formulario enviado:', formData);
        // Resetear el formulario después de enviar
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-8">Contáctanos</h1>
            <div className="max-w-md mx-auto mb-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-1 font-medium">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-1 font-medium">Asunto</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-1 font-medium">Mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="w-full px-3 py-2 border rounded-md"
                        ></textarea>
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-[#A98143] text-white py-2 px-4 rounded-md hover:bg-amber-600 transition duration-300"
                    >
                        Enviar Mensaje
                    </button>
                </form>
            </div>
            
            <div className="max-w-md mx-auto">
                <h2 className="text-2xl font-semibold mb-4">Encuéntranos en:</h2>
                <div className="space-y-4">
                    <div className="flex items-center justify-center">
                        <MdLocationOn className="text-2xl mr-2" />
                        <p>Passeig del Bogatell, 08005 Barcelona, España</p>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex space-x-4">                
                            <a href="https://www.instagram.com/tumilanesa" target="_blank" rel="noopener noreferrer" className="flex items-center text-pink-500 hover:text-pink-600">
                                <FaInstagram className="text-2xl mr-2" />
                                Instagram
                            </a>
                            <a href="https://www.tiktok.com/@tumilanesa" target="_blank" rel="noopener noreferrer" className="flex items-center text-black hover:text-gray-700">
                                <FaTiktok className="text-2xl mr-2" />
                                TikTok
                            </a>
                            <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-500 hover:text-green-600">
                                <FaWhatsapp className="text-2xl mr-2" />
                                +34 600 000 000
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;