import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/4 bg-blue-600 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          CRM - Clientes
        </h2>
        <nav className="mt-10">
          <Link
            className="text-white text-2xl block mt-2 hover:text-blue-200"
            to="/clientes"
          >
            Clientes
          </Link>
          <Link
            className="text-white text-2xl block mt-2 hover:text-blue-200"
            to="/clientes/nuevo"
          >
            Nuevo Cliente
          </Link>
        </nav>
      </div>
      <div className="md:w-3/4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
