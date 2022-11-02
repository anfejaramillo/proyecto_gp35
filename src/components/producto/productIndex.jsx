import Table from "../table/table";
import MainPage from "../table/mainPage";
function ProductIndex(props) {
    return (
        <div className="body-container mx-3 my-2">
            <div class="table-responsive-md mx-5">
                <MainPage
                    name="Lista de Productos"
                    columnsAlias={["ID", "Nombre", "Precio", "Marca"]}
                    columns={["id", "title", "price", "brand"]}
                    data={props.products}
                    path="/producto"
                    tools={["update", "delete"]}
                />
            </div>
        </div>
    );
}

export default ProductIndex;
