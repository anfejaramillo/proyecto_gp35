import "./css/App.css";
import Index from "./components/index";
import Navbar from "./components/navbar";
import Nosotros from "./components/nosotros";
import Footer from "./components/footer";
import Ejemplos from "./components/ejemplo/EjemplosIndex";
import ComponenteFuncion from "./components/ejemplo/ComponenteFuncion";
import ComponenteClase from "./components/ejemplo/ComponenteClase";
import EjemploHooks from "./components/ejemploHooks";
import UsuarioIndex from "./components/usuario/usuario";
import CategoriaIndex from "./components/categoria/categoria";
import ProductoIndex from "./components/producto/producto";
import CrearProducto from "./components/producto/crearProducto";
import ActualizarProducto from "./components/producto/actualizarProducto";
import EliminarProducto from "./components/producto/eliminarProducto";
import LoginForm from "./components/usuario/loginform";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div>
            <Navbar logged={false}></Navbar>
            <Routes>
                <Route path="/" element={<Index></Index>}></Route>
                <Route path="/nosotros" element={<Nosotros></Nosotros>}></Route>
                <Route path="/login" element={<LoginForm></LoginForm>}></Route>
                <Route path="/ejemplos">
                    <Route
                        path="/ejemplos"
                        element={<Ejemplos></Ejemplos>}
                    ></Route>
                    <Route
                        path="/ejemplos/componente_funcion"
                        element={<ComponenteFuncion></ComponenteFuncion>}
                    ></Route>
                    <Route
                        path="/ejemplos/componente_clase"
                        element={<ComponenteClase></ComponenteClase>}
                    ></Route>
                    <Route
                        path="/ejemplos/hooks"
                        element={<EjemploHooks></EjemploHooks>}
                    ></Route>
                </Route>
                <Route path="/usuario">
                    <Route
                        path="/usuario"
                        element={<UsuarioIndex></UsuarioIndex>}
                    ></Route>
                </Route>
                <Route path="/categoria">
                    <Route
                        path="/categoria"
                        element={<CategoriaIndex></CategoriaIndex>}
                    ></Route>
                </Route>
                <Route path="/producto">
                    <Route
                        path="/producto"
                        element={<ProductoIndex></ProductoIndex>}
                    ></Route>
                    <Route
                        path="/producto/create"
                        element={<CrearProducto></CrearProducto>}
                    ></Route>
                    <Route path="/producto/update/">
                        <Route
                            path=":idProduct"
                            element={<ActualizarProducto />}
                        ></Route>
                    </Route>
                    <Route path="/producto/delete/">
                        <Route
                            path=":idProduct"
                            element={<EliminarProducto />}
                        ></Route>
                    </Route>
                </Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
