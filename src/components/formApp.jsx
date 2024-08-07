import React, { useState, useEffect } from "react";

export const Formulario = ({ addNew, data }) => {
    const [nombre, setNombre] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [fecha, setFecha] = useState("");
    const [trabajador, setTrabajador] = useState("");

    useEffect(() => {
        if (data) {
            setNombre(data.nombre);
            setCantidad(data.cantidad);
            setFecha(data.fecha);
            setTrabajador(data.trabajador);
        } else {
            setNombre("");
            setCantidad("");
            setFecha("");
            setTrabajador("");
        }
    }, [data]);

    const handleSubmit = (e) => {
        e.preventDefault();
        addNew({ nombre, cantidad, fecha, trabajador });
        setNombre("");
        setCantidad("");
        setFecha("");
        setTrabajador("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Nombre producto</label>
                <input
                    type="text"
                    className="form-control"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Cantidad</label>
                <input
                    type="number"
                    className="form-control"
                    value={cantidad}
                    onChange={(e) => setCantidad(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Fecha de ingreso</label>
                <input
                    type="date"
                    className="form-control"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Trabajador</label>
                <input
                    type="text"
                    className="form-control"
                    value={trabajador}
                    onChange={(e) => setTrabajador(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">
                {data ? "Actualizar" : "Añadir"}
            </button>
        </form>
    );
};
