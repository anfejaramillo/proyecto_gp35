import Table from "../table/table";

function ProductIndex(props) {
    return (
        <div className="body-container mx-3 my-2">
            <div class="table-responsive-md mx-5">
                <Table
                    name="Lista de Productos"
                    columnsAlias={["id", "Nombre", "Precio", "Marca"]}
                    columns={["id", "title", "price", "brand"]}
                    data={props.products}
                    path="/productos"
                    tools={["update", "delete"]}
                />
            </div>
        </div>
    );
}

export default ProductIndex;
