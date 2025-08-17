import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-text text-[#efeceb]">
      <div className="lg:ml-15 mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo y descripción */}
        <div>
          <h2 className="text-lg font-bold mb-4">Mi Tienda</h2>
          <p className="text-sm">
            Tu tienda online de confianza. Encuentra los mejores productos al mejor precio.
          </p>
        </div>

        {/* Categorías */}
        <div>
          <h2 className="text-lg font-bold mb-4">Categorías</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Remeras</a></li>
            <li><a href="#" className="hover:underline">Buzos</a></li>
            <li><a href="#" className="hover:underline">Ofertas</a></li>
          </ul>
        </div>

        {/* Información */}
        <div>
          <h2 className="text-lg font-bold mb-4">Información</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Sobre nosotros</a></li>
            <li><a href="#" className="hover:underline">Envíos y devoluciones</a></li>
            <li><a href="#" className="hover:underline">Política de privacidad</a></li>
            <li><a href="#" className="hover:underline">Términos y condiciones</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h2 className="text-lg font-bold mb-4">Síguenos</h2>
          <div className="flex space-x-4 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-gray-300 transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-300 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-300 transition-colors">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="bg-black/20 text-center text-sm py-4">
        © {new Date().getFullYear()} Tienda. Todos los derechos reservados. (Esta es una tienda ficticia creada para fines de demostración)
      </div>
    </footer>
  );
};

export default Footer;
