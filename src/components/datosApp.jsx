export const Lista = ({ datos, delData }) => {
    const eliminar = (index) => {
        delData(datos.filter((item, i) => i !== index));
    };

    return (
        <>
            <div className="row">
                {/* map permite recorrer los datos del arreglo, index tiene el indice del arreglo */}
                {datos.map((item, index) => (
                    <div key={index} className="col-4 mb-3">
                        <div className="toast show">
                            <div className="toast-header">
                                <strong className="mx-auto">{item.nombre}</strong>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => eliminar(index)}
                                    data-bs-dismiss="toast"
                                ></button>
                            </div>
                            <div className="toast-body">
                                <p><strong>Cantidad:</strong> {item.cantidad}</p>
                                <p><strong>Fecha:</strong> {item.fecha}</p>
                                <p><strong>Trabajador:</strong> {item.trabajador}</p>
                                <p><strong>Mensaje:</strong> {item.error}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
