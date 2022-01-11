import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Formulario from "../components/Formulario";

const EditarClientes = () => {
  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const obtenerClienteApi = async () => {
      try {
        const url = `http://localhost:4000/Clientes/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setCliente(resultado);
      } catch (error) {
        console.log(error);
      }
      setTimeout(() => {
        setCargando(!cargando);
      }, 1000);
    };
    obtenerClienteApi();
  }, []);
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900 ">Editar Cliente</h1>
      <p>Modifica los siguientes campos para editar al cliente</p>
      {cliente?.nombre ? (
        <Formulario cliente={cliente} cargando={cargando} />
      ) : (
        <p>No existe registro de ese cliente</p>
      )}
    </>
  );
};

export default EditarClientes;
