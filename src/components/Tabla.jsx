import React from "react";

export const Tabla = ({ datos, editar, eliminar }) => {
    return (
        <div className="table-responsive">
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Nombre producto</th>
                        <th>Cantidad</th>
                        <th>Fecha de ingreso</th>
                        <th>Trabajador</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map((item, index) => (
                        <tr key={item.id}>
                            <td>{item.nombre}</td>
                            <td>{item.cantidad}</td>
                            <td>{item.fecha}</td>
                            <td>{item.trabajador}</td>
                            <td>
                                <button className="btn btn-warning me-2" onClick={() => editar(index)}>Editar</button>
                                <button className="btn btn-danger" onClick={() => eliminar(item.id)}>Eliminar</button> 
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
