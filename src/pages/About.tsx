import milanesaImage from '../assets/images/milanesa-napolitana.jpg';

const About = () => {
  return (
    <div className="bg-[#F3F4F6] min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#1F2937] mb-8 text-center">Sobre "M de Milanga"</h1>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <img src={milanesaImage} alt="Milanesa" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-[#1F2937] mb-4">Nuestra Historia</h2>
            <p className="text-gray-700 mb-4">
              M de Milanga nació en 2024 con una misión clara: llevar la auténtica milanesa argentina a todos los hogares de España. Fundada por un grupo de apasionados por la gastronomía, nuestra empresa se ha convertido en sinónimo de calidad y sabor.
            </p>
            <p className="text-gray-700 mb-4">
              Utilizamos recetas tradicionales y los mejores ingredientes para crear milanesas que te transportarán directamente a las calles de Buenos Aires con cada bocado.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-[#1F2937] mb-4">Nuestra Misión</h2>
            <p className="text-gray-700 mb-4">
              Nos dedicamos a ofrecer la mejor experiencia de milanesa congelada, combinando la tradición culinaria argentina con la conveniencia moderna. Queremos que cada cliente disfrute de una comida deliciosa y auténtica en la comodidad de su hogar.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-[#1F2937] mb-4">Nuestros Valores</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Calidad sin compromisos en cada milanesa</li>
              <li>Pasión por la gastronomía argentina</li>
              <li>Compromiso con la satisfacción del cliente</li>
              <li>Innovación constante en nuestros productos y servicios</li>
              <li>Responsabilidad en la selección de ingredientes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
