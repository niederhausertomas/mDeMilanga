
import milanesaClasica from "../assets/images/milanesa-clasica.jpg"
import { Link } from 'react-router-dom'



const Home = () => {
 
  return (
    <div>

      <img src={milanesaClasica} alt="milanesa-clasica" className='w-full h-full object-cover' />

      <div className='flex flex-col items-center justify-center bg-[#1F2937] py-10'>
        <h1 className="text-4xl font-bold
        text-transparent bg-clip-text" 
        style={{ background: 'radial-gradient(circle, white 1%, #A98143 80%)', WebkitBackgroundClip: 'text' }}>
          M DE MILANGA
        </h1>
        <h2 className='text-xl text-white text-center mx-20'>Milanesas congeladas, Rápidas, ricas y siempre a mano</h2>
      </div>

      <Link 
        to="/subscription"
        className='bg-[#A98143] text-white px-4 py-2 rounded-md text-center mx-auto w-fit block mt-8'
      >Subscribirse</Link>
      <p className='text-center text-[#1F2937] mt-4'>¡Descubrí nuestros increíbles packs de suscripción!</p>

      <Link 
        to="/order"
        className='bg-[#A98143] text-white px-4 py-2 rounded-md text-center mx-auto w-fit block mt-8'
      >Hacer un pedido</Link>
      <p className='text-center text-[#1F2937] mt-4'>¡La milanesa perfecta a un clic de distancia!</p>
    </div>
  )
}

export default Home
