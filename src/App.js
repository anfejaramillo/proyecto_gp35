import "./css/App.css";
import Index from "./components/index";
import Navbar from "./components/navbar";
import Nosotros from "./components/nosotros";
import Footer from "./components/footer";
import Ejemplos from "./components/ejemplo/EjemplosIndex";
import ComponenteFuncion from "./components/ejemplo/ComponenteFuncion";
import ComponenteClase from "./components/ejemplo/ComponenteClase";
import UsuarioIndex from "./components/usuario/usuario";
import CategoriaIndex from "./components/categoria/categoria";
import ProductoIndex from "./components/producto/producto";
import LoginForm from "./components/usuario/loginform";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div>
            <Navbar logged={true}></Navbar>
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
                </Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
