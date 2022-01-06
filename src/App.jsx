import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Inicio from "./paginas/Inicio";
import NuevoCliente from "./paginas/NuevoCliente";
import EditarClientes from "./paginas/EditarClientes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clientes" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="nuevo" element={<NuevoCliente />} />
          <Route path="editar" element={<EditarClientes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
