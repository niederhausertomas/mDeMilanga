import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <footer className="bg-[#1F2937] text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">"M DE Milanga"</h3>
              <p>Las mejores milanesas congeladas a tu puerta.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Enlaces rápidos</h4>
              <ul>
                <li><Link to="/" className="hover:underline">Inicio</Link></li>
                <li><Link to="/menu" className="hover:underline">Menú</Link></li>
                <li><Link to="/subscription" className="hover:underline">Suscripción</Link></li>
                <li><Link to="/contact" className="hover:underline">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Contáctanos</h4>
              <p>Email: info@milanga.com</p>
              <p>Teléfono: (123) 456-7890</p>
              <div className="mt-4">
                <a href="#" className="mr-4 hover:text-gray-300">Facebook</a>
                <a href="#" className="mr-4 hover:text-gray-300">Instagram</a>
                <a href="#" className="hover:text-gray-300">Twitter</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white text-center">
            <p>&copy; {new Date().getFullYear()} "M DE Milanga". Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;