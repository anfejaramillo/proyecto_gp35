function CrearProducto(props) {
    return (
        <div className="mx-auto text-center m-3 p-3">
            <h2>Pagina: Crear Producto</h2>
            <div className="w-75 mx-auto text-center">
                <form>
                    <div class="form-floating mb-3">
                        <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="Nombre Producto"
                            name="product_title"
                            minLength={3}
                            required={true}
                        />
                        <label for="floatingInput">Nombre Producto</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input
                            type={"number"}
                            min={0}
                            class="form-control"
                            id="floatingPrice"
                            placeholder="Precio"
                            name="product_price"
                            defaultValue={0}
                            required={true}
                        />
                        <label for="floatingPrice">Precio</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input
                            type="text"
                            class="form-control"
                            id="floatingBrand"
                            placeholder="Marca"
                            name="product_brand"
                            minLength={3}
                            required={true}
                        />
                        <label for="floatingBrand">Marca</label>
                    </div>
                    <button
                        class="w-100 btn btn-lg btn-outline-success"
                        type="submit"
                    >
                        Crear
                    </button>
                </form>
            </div>
        </div>
    );
}
export default CrearProducto;
