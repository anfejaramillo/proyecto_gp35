import { Link } from "react-router-dom";

function Ejemplos(props) {
    return (
        <div className="m-5 px-3 text-justify">
            <ul>
                <li>
                    <Link to={"/ejemplos/componente_funcion"}>
                        Componente de tipo FUNCION
                    </Link>
                </li>
                <li>
                    <Link to={"/ejemplos/componente_clase"}>
                        Componente de tipo CLASE
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Ejemplos;
